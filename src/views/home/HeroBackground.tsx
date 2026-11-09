'use client';

import { useEffect, useRef } from 'react';

// ---------------------------------------------------------------------------
// Wire data: real bytes from the protocols behind the projects
// ---------------------------------------------------------------------------

const ascii = (s: string) => Array.from(s, (c) => c.charCodeAt(0));
const hex = (s: string) => s.split(' ').map((h) => parseInt(h, 16));

const MESSAGES: number[][] = [
    // HTTP/2 client connection preface (rs-http2)
    ascii('PRI * HTTP/2.0\r\n\r\nSM\r\n\r\n'),
    // HTTP/2 SETTINGS frame: MAX_CONCURRENT_STREAMS=100,
    // INITIAL_WINDOW_SIZE=65535, MAX_FRAME_SIZE=16384
    hex('00 00 12 04 00 00 00 00 00 00 03 00 00 00 64 00 04 00 00 ff ff 00 05 00 00 40 00'),
    // SMTP / IMAP (tmail)
    ascii('EHLO client\r\n'),
    ascii('250-STARTTLS\r\n'),
    ascii('* OK IMAP4rev1 ready\r\n'),
    ascii('a1 CAPABILITY\r\n'),
    // BitTorrent handshake prefix + reserved bytes
    [0x13, ...ascii('BitTorrent protocol'), 0, 0, 0, 0, 0, 0, 0, 0],
    // Mainline DHT ping query (BEP 5)
    ascii('d1:ad2:id20:abcdefghij0123456789e1:q4:ping1:t2:aa1:y1:qe'),
    // x86-64 prologue TanScript emits: push rbp; mov rbp, rsp; sub rsp, 32
    hex('55 48 89 e5 48 83 ec 20'),
];

const DATA: number[] = [];
/** Data index of each message's first byte -> message length. */
const MESSAGE_AT = new Map<number, number>();
for (const msg of MESSAGES) {
    MESSAGE_AT.set(DATA.length, msg.length);
    DATA.push(...msg);
}

const HEX_LABEL = Array.from({ length: 256 }, (_, b) =>
    b.toString(16).padStart(2, '0'),
);
const ASCII_LABEL = Array.from({ length: 256 }, (_, b) => {
    if (b === 0x0d) return '\\r';
    if (b === 0x0a) return '\\n';
    if (b >= 0x20 && b < 0x7f) return String.fromCharCode(b);
    return '··';
});

// ---------------------------------------------------------------------------
// Rendering
// ---------------------------------------------------------------------------

const CELL_W = 26;
const CELL_H = 22;
const FONT = '12px ui-monospace, "Cascadia Code", Consolas, Menlo, monospace';
const BASE_COLOR = 'rgba(148, 163, 184, 0.09)';
const LIT_COLOR = '#2dd4bf';
const LIT_MAX_ALPHA = 0.7;
/** Glow above this shows the decoded character instead of hex. */
const DECODE_AT = 0.3;
/** Cells per second a streaming packet advances. */
const STREAM_SPEED = 32;
const MAX_STREAMS = 3;
/** Seconds for glow to fall to 1/e. */
const GLOW_DECAY = 0.9;
const CURSOR_RADIUS = 90;

interface Stream {
    cell: number;
    head: number;
    len: number;
}

export default function HeroBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)',
        ).matches;

        let width = 0;
        let height = 0;
        let cols = 0;
        let rows = 0;
        let originX = 0;
        let glow = new Float32Array(0);
        let streams: Stream[] = [];
        let cursor: { x: number; y: number } | null = null;
        let visible = true;
        let raf = 0;
        let last = 0;
        let nextSpawn = 0;

        function resize() {
            const rect = canvas!.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas!.width = Math.round(width * dpr);
            canvas!.height = Math.round(height * dpr);
            ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
            ctx!.font = FONT;
            ctx!.textAlign = 'center';
            ctx!.textBaseline = 'middle';
            cols = Math.ceil(width / CELL_W);
            rows = Math.ceil(height / CELL_H);
            originX = (width - cols * CELL_W) / 2;
            glow = new Float32Array(cols * rows);
            streams = [];
            draw();
        }

        /** Start a packet at the first message boundary after a random cell. */
        function spawn() {
            const maxRow = Math.max(1, Math.floor(rows * 0.75));
            let cell = Math.floor(Math.random() * cols * maxRow);
            for (let n = 0; n < DATA.length; n++, cell++) {
                const len = MESSAGE_AT.get(cell % DATA.length);
                if (len !== undefined) {
                    streams.push({ cell, head: 0, len });
                    return;
                }
            }
        }

        function light(cell: number, amount: number) {
            if (cell < glow.length && glow[cell] < amount) glow[cell] = amount;
        }

        function lightCursor() {
            if (!cursor) return;
            const c0 = Math.max(0, Math.floor((cursor.x - originX - CURSOR_RADIUS) / CELL_W));
            const c1 = Math.min(cols - 1, Math.floor((cursor.x - originX + CURSOR_RADIUS) / CELL_W));
            const r0 = Math.max(0, Math.floor((cursor.y - CURSOR_RADIUS) / CELL_H));
            const r1 = Math.min(rows - 1, Math.floor((cursor.y + CURSOR_RADIUS) / CELL_H));
            for (let r = r0; r <= r1; r++) {
                for (let c = c0; c <= c1; c++) {
                    const dx = originX + (c + 0.5) * CELL_W - cursor.x;
                    const dy = (r + 0.5) * CELL_H - cursor.y;
                    const d = Math.hypot(dx, dy) / CURSOR_RADIUS;
                    if (d < 1) light(r * cols + c, 1 - d);
                }
            }
        }

        function draw() {
            ctx!.clearRect(0, 0, width, height);

            ctx!.globalAlpha = 1;
            ctx!.fillStyle = BASE_COLOR;
            for (let i = 0; i < glow.length; i++) {
                if (glow[i] >= 0.02) continue;
                const x = originX + ((i % cols) + 0.5) * CELL_W;
                const y = (Math.floor(i / cols) + 0.5) * CELL_H;
                ctx!.fillText(HEX_LABEL[DATA[i % DATA.length]], x, y);
            }

            ctx!.fillStyle = LIT_COLOR;
            for (let i = 0; i < glow.length; i++) {
                const g = glow[i];
                if (g < 0.02) continue;
                const b = DATA[i % DATA.length];
                const x = originX + ((i % cols) + 0.5) * CELL_W;
                const y = (Math.floor(i / cols) + 0.5) * CELL_H;
                ctx!.globalAlpha = 0.09 + (LIT_MAX_ALPHA - 0.09) * g;
                ctx!.fillText(g > DECODE_AT ? ASCII_LABEL[b] : HEX_LABEL[b], x, y);
            }
            ctx!.globalAlpha = 1;
        }

        function frame(now: number) {
            raf = 0;
            const dt = last ? Math.min((now - last) / 1000, 0.1) : 0;
            last = now;

            if (!reduceMotion) {
                if (now >= nextSpawn && streams.length < MAX_STREAMS) {
                    spawn();
                    nextSpawn = now + 900 + Math.random() * 1400;
                }
                streams = streams.filter((s) => {
                    const prev = Math.floor(s.head);
                    s.head += dt * STREAM_SPEED;
                    const cur = Math.min(Math.floor(s.head), s.len);
                    for (let i = prev; i < cur; i++) light(s.cell + i, 1);
                    return s.head < s.len;
                });
            }

            const decay = Math.exp(-dt / GLOW_DECAY);
            let glowing = false;
            for (let i = 0; i < glow.length; i++) {
                if (glow[i] === 0) continue;
                glow[i] = glow[i] > 0.01 ? glow[i] * decay : 0;
                glowing = true;
            }
            lightCursor();

            if (glowing || cursor) draw();

            // Reduced motion: only animate while the cursor's glow fades.
            if (visible && (!reduceMotion || glowing || cursor)) schedule();
            else last = 0;
        }

        function schedule() {
            if (!raf) raf = requestAnimationFrame(frame);
        }

        function onPointerMove(e: PointerEvent) {
            if (e.pointerType !== 'mouse') return;
            const rect = canvas!.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
            cursor = inside ? { x, y } : null;
            if (inside && visible) schedule();
        }

        function onPointerLeave() {
            cursor = null;
        }

        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(canvas);

        const intersectionObserver = new IntersectionObserver(([entry]) => {
            visible = entry.isIntersecting;
            if (visible && !reduceMotion) schedule();
        });
        intersectionObserver.observe(canvas);

        window.addEventListener('pointermove', onPointerMove, { passive: true });
        document.documentElement.addEventListener('pointerleave', onPointerLeave);

        return () => {
            cancelAnimationFrame(raf);
            resizeObserver.disconnect();
            intersectionObserver.disconnect();
            window.removeEventListener('pointermove', onPointerMove);
            document.documentElement.removeEventListener('pointerleave', onPointerLeave);
        };
    }, []);

    return <canvas ref={canvasRef} className="hero-bg" aria-hidden="true" />;
}
