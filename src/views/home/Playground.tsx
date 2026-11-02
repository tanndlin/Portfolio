'use client';

import {
    useEffect,
    useMemo,
    useRef,
    useState,
    type KeyboardEvent,
    type ReactNode,
    type UIEvent,
} from 'react';
import { EXAMPLES } from './playgroundExamples';

// ---------------------------------------------------------------------------
// WASM compiler
// ---------------------------------------------------------------------------

// Raw exports of the `tanscript-playground` crate (TanScript/playground).
interface CompilerExports {
    memory: WebAssembly.Memory;
    alloc(len: number): number;
    dealloc(ptr: number, len: number): void;
    compile(ptr: number, len: number): number;
    output_ptr(): number;
    output_len(): number;
}

type CompileResult =
    | { ok: true; asm: string; ms: number }
    | { ok: false; error: string; ms: number };

const ICE_MESSAGE =
    'internal compiler error: the compiler panicked on this input.\n' +
    "That's a bug in TanScript, not in your code.";

class Compiler {
    private exports: CompilerExports | null = null;

    private constructor(private readonly module: WebAssembly.Module) {}

    static async load(url: string): Promise<Compiler> {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`failed to fetch ${url}: ${res.status}`);
        const module = await WebAssembly.compile(await res.arrayBuffer());
        const compiler = new Compiler(module);
        await compiler.reset();
        return compiler;
    }

    /** A trap (Rust panic) can leave memory inconsistent, so start fresh. */
    async reset(): Promise<void> {
        const instance = await WebAssembly.instantiate(this.module, {});
        this.exports = instance.exports as unknown as CompilerExports;
    }

    compile(source: string): CompileResult {
        const x = this.exports;
        const start = performance.now();
        if (!x) return { ok: false, error: ICE_MESSAGE, ms: 0 };

        try {
            const bytes = new TextEncoder().encode(source);
            const ptr = x.alloc(bytes.length);
            new Uint8Array(x.memory.buffer, ptr, bytes.length).set(bytes);
            const ok = x.compile(ptr, bytes.length) === 1;
            x.dealloc(ptr, bytes.length);
            const text = new TextDecoder().decode(
                new Uint8Array(x.memory.buffer, x.output_ptr(), x.output_len()),
            );
            const ms = performance.now() - start;
            return ok ? { ok, asm: text, ms } : { ok, error: text, ms };
        } catch {
            this.exports = null;
            void this.reset();
            return {
                ok: false,
                error: ICE_MESSAGE,
                ms: performance.now() - start,
            };
        }
    }
}

// ---------------------------------------------------------------------------
// Syntax highlighting (builds React nodes; never touches innerHTML)
// ---------------------------------------------------------------------------

const TS_KEYWORDS = new Set([
    'let',
    'def',
    'struct',
    'enum',
    'if',
    'else',
    'while',
    'for',
    'return',
    'break',
    'continue',
    'as',
]);
const TS_TYPES = new Set(['u8', 'i32', 'i64', 'u32', 'u64', 'char', 'bool']);
const TS_LITERALS = new Set(['true', 'false', 'null']);
const TS_TOKEN =
    /("(?:\\.|[^"\\\n])*"?)|('(?:\\.|[^'\\\n])*'?)|(\b\d+\b)|([A-Za-z_]\w*)|(\s+)|([\s\S])/g;

function highlightTanScript(source: string): ReactNode[] {
    const nodes: ReactNode[] = [];
    let m: RegExpExecArray | null;
    let i = 0;
    TS_TOKEN.lastIndex = 0;
    while ((m = TS_TOKEN.exec(source))) {
        const [text, str, chr, num, ident] = m;
        let cls: string | undefined;
        if (str || chr) cls = 'pg-str';
        else if (num) cls = 'pg-num';
        else if (ident) {
            if (TS_KEYWORDS.has(ident)) cls = 'pg-kw';
            else if (TS_TYPES.has(ident)) cls = 'pg-type';
            else if (TS_LITERALS.has(ident)) cls = 'pg-num';
            else if (/^[A-Z]/.test(ident)) cls = 'pg-struct';
            else if (source[TS_TOKEN.lastIndex] === '(') cls = 'pg-fn';
        } else if (!/\s/.test(text)) cls = 'pg-punct';
        nodes.push(
            cls ? (
                <span key={i++} className={cls}>
                    {text}
                </span>
            ) : (
                text
            ),
        );
    }
    return nodes;
}

const ASM_DIRECTIVES = new Set([
    'BITS',
    'global',
    'extern',
    'SECTION',
    'section',
    'db',
    'dw',
    'dd',
    'dq',
    'QWORD',
    'DWORD',
    'WORD',
    'BYTE',
]);
const ASM_REGISTER =
    /^(r[a-ds]x|r[sd]i|r[sb]p|r\d{1,2}[dwb]?|e[a-ds]x|e[sd]i|e[sb]p|[a-d][xlh]|[sd]il|[sb]pl|xmm\d{1,2})$/;
const ASM_TOKEN =
    /("[^"]*"?)|(\b0x[0-9a-fA-F]+\b|\b\d+\b)|([A-Za-z_.][\w.]*)|(\s+)|([\s\S])/g;

function highlightAsmLine(line: string, key: number): ReactNode {
    const trimmed = line.trimStart();
    if (trimmed.startsWith(';')) {
        return (
            <span key={key} className="pg-src-echo">
                {line}
            </span>
        );
    }
    const label = /^([A-Za-z_.][\w.]*:)(.*)$/.exec(line);
    if (label) {
        return (
            <span key={key}>
                <span className="pg-label">{label[1]}</span>
                {label[2]}
            </span>
        );
    }

    const nodes: ReactNode[] = [];
    let m: RegExpExecArray | null;
    let i = 0;
    let first = true;
    ASM_TOKEN.lastIndex = 0;
    while ((m = ASM_TOKEN.exec(line))) {
        const [text, str, num, word] = m;
        let cls: string | undefined;
        if (str) cls = 'pg-str';
        else if (num) cls = 'pg-num';
        else if (word) {
            if (ASM_DIRECTIVES.has(word)) cls = 'pg-directive';
            else if (first) cls = 'pg-mnemonic';
            else if (ASM_REGISTER.test(word)) cls = 'pg-reg';
            first = false;
        } else if (!/\s/.test(text)) cls = 'pg-punct';
        nodes.push(
            cls ? (
                <span key={i++} className={cls}>
                    {text}
                </span>
            ) : (
                text
            ),
        );
    }
    return <span key={key}>{nodes}</span>;
}

function highlightAsm(asm: string): ReactNode[] {
    return asm
        .split('\n')
        .flatMap((line, i) => [highlightAsmLine(line, i), '\n']);
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

// Browsers coarsen performance.now() (0.1-1 ms), so tiny compiles read as 0.
function formatMs(ms: number): string {
    return ms < 1 ? '<1 ms' : `${ms.toFixed(1)} ms`;
}

const WASM_URL = '/tanscript.wasm';
const COMPILE_DELAY_MS = 120;
const INDENT = '    ';

type Status =
    | { kind: 'loading' }
    | { kind: 'load-failed' }
    | { kind: 'done'; result: CompileResult };

export default function Playground() {
    const [exampleId, setExampleId] = useState(EXAMPLES[0].id);
    const [source, setSource] = useState(EXAMPLES[0].source);
    const [compiler, setCompiler] = useState<Compiler | null>(null);
    const [status, setStatus] = useState<Status>({ kind: 'loading' });

    const highlightRef = useRef<HTMLPreElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const tabEscapedRef = useRef(false);

    useEffect(() => {
        let cancelled = false;
        Compiler.load(WASM_URL).then(
            (c) => !cancelled && setCompiler(c),
            () => !cancelled && setStatus({ kind: 'load-failed' }),
        );
        return () => {
            cancelled = true;
        };
    }, []);

    useEffect(() => {
        if (!compiler) return;
        const id = setTimeout(
            () => setStatus({ kind: 'done', result: compiler.compile(source) }),
            COMPILE_DELAY_MS,
        );
        return () => clearTimeout(id);
    }, [compiler, source]);

    const highlightedSource = useMemo(
        () => highlightTanScript(source),
        [source],
    );
    const result = status.kind === 'done' ? status.result : null;
    const highlightedAsm = useMemo(
        () => (result?.ok ? highlightAsm(result.asm) : null),
        [result],
    );

    function selectExample(id: string) {
        const example = EXAMPLES.find((e) => e.id === id);
        if (!example) return;
        setExampleId(id);
        setSource(example.source);
    }

    function syncScroll(e: UIEvent<HTMLTextAreaElement>) {
        const pre = highlightRef.current;
        if (!pre) return;
        pre.scrollTop = e.currentTarget.scrollTop;
        pre.scrollLeft = e.currentTarget.scrollLeft;
    }

    // Tab indents; press Esc first to let Tab move focus out (keyboard users).
    function onKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
        if (e.key === 'Escape') {
            tabEscapedRef.current = true;
            return;
        }
        if (e.key !== 'Tab' || e.shiftKey || tabEscapedRef.current) {
            tabEscapedRef.current = false;
            return;
        }
        e.preventDefault();
        const el = e.currentTarget;
        const { selectionStart: start, selectionEnd: end } = el;
        setSource(source.slice(0, start) + INDENT + source.slice(end));
        requestAnimationFrame(() => {
            el.selectionStart = el.selectionEnd = start + INDENT.length;
        });
    }

    const asmLines = result?.ok ? result.asm.trimEnd().split('\n').length : 0;

    return (
        <section id="playground" className="pb-24">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
                <div className="max-w-2xl">
                    <h2 className="mb-2 text-2xl font-bold tracking-tight">
                        Try my compiler
                    </h2>
                    <p className="text-muted">
                        This is{' '}
                        <a
                            className="accent-text hover:underline"
                            href="https://github.com/tanndlin/tanscript"
                        >
                            TanScript
                        </a>
                        , a language and compiler I wrote from scratch in Rust,
                        running in your browser as WebAssembly. Edit the code
                        and the x86-64 assembly regenerates as you type.
                    </p>
                </div>
                <label className="flex items-center gap-2 text-sm text-muted">
                    Example
                    <select
                        className="pg-select"
                        value={exampleId}
                        onChange={(e) => selectExample(e.target.value)}
                    >
                        {EXAMPLES.map((ex) => (
                            <option key={ex.id} value={ex.id}>
                                {ex.label}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            <div className="pg-window">
                <div className="grid md:grid-cols-2">
                    <div className="pg-pane md:border-r">
                        <div className="pg-pane-title">playground.tan</div>
                        <div className="pg-editor">
                            <pre
                                ref={highlightRef}
                                className="pg-code pg-highlight"
                                aria-hidden="true"
                            >
                                {highlightedSource}
                                {'\n'}
                            </pre>
                            <textarea
                                ref={textareaRef}
                                className="pg-code pg-input"
                                value={source}
                                onChange={(e) => {
                                    setSource(e.target.value);
                                    setExampleId('');
                                }}
                                onScroll={syncScroll}
                                onKeyDown={onKeyDown}
                                spellCheck={false}
                                autoCapitalize="off"
                                autoComplete="off"
                                autoCorrect="off"
                                wrap="off"
                                aria-label="TanScript source code"
                            />
                        </div>
                    </div>
                    <div className="pg-pane max-md:border-t">
                        <div className="pg-pane-title">
                            playground.asm{' '}
                            <span className="opacity-60">· NASM x86-64</span>
                        </div>
                        <pre
                            className={`pg-code pg-output ${result && !result.ok ? 'pg-error' : ''}`}
                            aria-live="polite"
                            aria-label="Generated assembly"
                        >
                            {status.kind === 'loading' && (
                                <span className="text-muted">
                                    Loading compiler…
                                </span>
                            )}
                            {status.kind === 'load-failed' && (
                                <span className="text-muted">
                                    Couldn&apos;t load the compiler. Try
                                    refreshing the page.
                                </span>
                            )}
                            {result &&
                                (result.ok ? highlightedAsm : result.error)}
                        </pre>
                    </div>
                </div>
                <div className="pg-status">
                    {result ? (
                        result.ok ? (
                            <>
                                <span className="accent-text">●</span> Compiled
                                in {formatMs(result.ms)} · {asmLines} lines of
                                assembly
                            </>
                        ) : (
                            <>
                                <span className="text-red-400">●</span> Compile
                                error
                            </>
                        )
                    ) : (
                        <>
                            <span className="text-muted">●</span>{' '}
                            {status.kind === 'load-failed'
                                ? 'Compiler unavailable'
                                : 'Loading…'}
                        </>
                    )}
                    <span className="ml-auto max-sm:hidden">
                        Compiles only — it doesn&apos;t run the program
                    </span>
                </div>
            </div>
        </section>
    );
}
