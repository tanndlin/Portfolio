import CompactProject from './CompactProject';
import Project from './Project';
import * as Tech from './Technologies';

function ProjectsPage() {
    return (
        <article id="projects" className="container flex-1 w-full py-12 m-auto">
            <h1 className="mb-16 section-title transition-header">
                Personal Projects
            </h1>
            <h2 className="mb-10 font-mono text-sm tracking-widest uppercase accent-text">
                Featured
            </h2>
            <div className="flex flex-col gap-24">
                <Project
                    id="tanscript"
                    title="TanScript"
                    overview="A statically typed, C-like language with a from-scratch compiler written in Rust that emits x86-64 assembly for Windows"
                    githubLink="https://github.com/tanndlin/tanscript"
                    technologies={[<Tech.RustTech key="rust" />]}
                    img={'/tanscript-mandelbrot.webp'}
                    caption={
                        <>
                            Real TanScript output: a 38-line program from the
                            golden test suite that renders the Mandelbrot set
                            using only integer math (fixed-point, 12 fractional
                            bits), compiled to x86-64 and checked against this
                            exact output on every test run.
                        </>
                    }
                >
                    <p>
                        <b>Key features:</b>
                    </p>
                    <ul className="mt-1 list-disc">
                        <li className="ml-4">
                            Full compiler pipeline built by hand: lexer,
                            recursive-descent parser, preprocessor, type checker
                            with local type inference, and a code generator with
                            register allocation that emits NASM x86-64 assembly.
                        </li>
                        <li className="ml-4">
                            Static type system with sized signed and unsigned
                            integers, chars, booleans, pointers, structs, and
                            generics, plus explicit casts and implicit
                            upcasting.
                        </li>
                        <li className="ml-4">
                            Enums and match statements over enums, integers, and
                            chars, with a wildcard arm and a compile-time
                            exhaustiveness check that rejects an enum match
                            missing a variant.
                        </li>
                        <li className="ml-4">
                            Structs with C-compatible memory layout, copy
                            semantics, and support for passing structs and
                            pointers to structs between functions.
                        </li>
                        <li className="ml-4">
                            Implements the Win64 calling convention (shadow
                            space, register and stack arguments, stack
                            alignment) so TanScript code can call directly into
                            the C runtime, such as printf and malloc.
                        </li>
                        <li className="ml-4">
                            Developed with Test Driven Development: 420+ unit
                            tests and a golden test suite that compiles and runs
                            real programs, including 15+ Project Euler
                            solutions, a linked list, a quine, and an ASCII
                            Mandelbrot renderer using fixed-point math.
                        </li>
                        <li className="ml-4">
                            Hardened with cargo-fuzz and a nightly Jenkins CI
                            pipeline that reports status back to GitHub.
                        </li>
                        <li className="ml-4">
                            Developer tooling including a Language Server
                            Protocol (LSP) implementation and a VS Code
                            extension with syntax highlighting.
                        </li>
                        <li className="ml-4">
                            Now working toward self-hosting by rewriting the
                            compiler in TanScript itself, starting with a
                            complete lexer.
                        </li>
                    </ul>
                </Project>

                <Project
                    id="codebattle"
                    title="CodeBattle"
                    overview="Real-time competitive coding: players join a room and race to solve the same prompt"
                    link="https://codebattle.tanndlin.com"
                    githubLink="https://github.com/tanndlin/CodeBattle"
                    technologies={[
                        <Tech.RustTech key="rust" />,
                        <Tech.ReactTech key="react" />,
                        <Tech.TypeScriptTech key="ts" />,
                        <Tech.SQLTech key="sql" />,
                        <Tech.DockerTech key="docker" />,
                    ]}
                    img={
                        'https://opengraph.githubassets.com/1/tanndlin/CodeBattle'
                    }
                >
                    <p>
                        <b>Key features:</b>
                    </p>
                    <ul className="mt-1 list-disc">
                        <li className="ml-4">
                            Rust game server (axum, tokio) that runs rooms,
                            rounds, and players over a WebSocket protocol, with
                            TypeScript bindings generated from the Rust types
                            by ts-rs.
                        </li>
                        <li className="ml-4">
                            Supports JavaScript, TypeScript, Python, Go, Rust,
                            C++, and Java. Every prompt has starter code and a
                            harness in every language.
                        </li>
                        <li className="ml-4">
                            Submissions are judged against hidden test cases by
                            sandboxed workers that pull jobs from a Redis queue.
                            The workers run under gVisor on an isolated network,
                            and seccomp filters limit compiled code to a short
                            allowlist of syscalls.
                        </li>
                        <li className="ml-4">
                            Samples for JS and TS run in the browser inside a
                            Web Worker, so feedback is instant while you type in
                            the Monaco editor.
                        </li>
                        <li className="ml-4">
                            Public and private rooms, GitHub and Google sign-in,
                            and a leaderboard backed by PostgreSQL, deployed as
                            one Docker Compose stack with Jenkins CI.
                        </li>
                    </ul>
                </Project>
            </div>

            <h2 className="mt-32 mb-10 font-mono text-sm tracking-widest uppercase accent-text">
                More projects
            </h2>
            <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
                <CompactProject
                    id="ray-tracer"
                    title="Ray Tracer"
                    overview="A ray tracer in Rust, ported from my original C++ version, with BVH acceleration and data-parallel rendering across every core"
                    githubLink="https://github.com/tanndlin/RustRayTracer"
                    technologies={[
                        <Tech.RustTech key="rust" />,
                        <Tech.CPPTech key="cpp" />,
                    ]}
                    img={'/ray-tracer.webp'}
                >
                    <ul className="mt-1 list-disc">
                        <li className="ml-4">
                            Bounding Volume Hierarchy (BVH) acceleration
                            structure that skips faces a ray can't hit, greatly
                            reducing intersection tests.
                        </li>
                        <li className="ml-4">
                            Object instancing reuses mesh data across copies,
                            keeping memory usage low and improving cache
                            locality.
                        </li>
                        <li className="ml-4">
                            Supports .obj, .mtl, and .gltf file formats for easy
                            importing of 3D models and materials, including a
                            hand-written glTF deserializer built on serde.
                        </li>
                        <li className="ml-4">
                            Organized as a multi-crate Cargo workspace
                            (geometry, materials, parser, and the renderer) with
                            Rayon data-parallel rendering across all cores.
                        </li>
                        <li className="ml-4">
                            Ships as a CLI (clap) with live progress bars
                            (indicatif).
                        </li>
                    </ul>
                </CompactProject>

                <CompactProject
                    id="lion"
                    title="Lion"
                    overview="Lead developer of a TypeScript Discord bot with 30+ contributors that helps users and moderators run the UCF CS Discord server, serving 14,000+ users"
                    githubLink="https://github.com/cs-discord-at-ucf/lion"
                    img={'/lion.webp'}
                    technologies={[
                        <Tech.TypeScriptTech key="ts" />,
                        <Tech.DiscordTech key="discord" />,
                        <Tech.MongoDBTech key="mongo" />,
                        <Tech.DockerTech key="docker" />,
                    ]}
                />

                <CompactProject
                    id="dynamicalc"
                    title="DynamiCalc"
                    overview="A calculation notebook where variables are formulas: change one line and every line that depends on it updates, with dependency wires in the margin and a graphing page for functions of x"
                    githubLink="https://github.com/tanndlin/DynamiCalc"
                    link="https://dynamicalc.tanndlin.com"
                    technologies={[
                        <Tech.ReactTech key="react" />,
                        <Tech.TypeScriptTech key="ts" />,
                    ]}
                    img={'/dynamiCalc-ss.webp'}
                />

                <CompactProject
                    id="budgie"
                    title="Budgie"
                    overview="A budgeting app for recurring bills, grocery budgets, and one-time expenses. I was the lead front-end engineer for the website and helped oversee the Express.js API."
                    link="https://budgie.tanndlin.com"
                    githubLink="https://github.com/tanndlin/Budgie"
                    img={'/budgie.webp'}
                    technologies={[
                        <Tech.ReactTech key="react" />,
                        <Tech.FirebaseTech key="firebase" />,
                        <Tech.FlutterTech key="flutter" />,
                        <Tech.ExpressTech key="express" />,
                    ]}
                />

                <CompactProject
                    id="tmail"
                    title="tmail"
                    overview="A from-scratch SMTP + IMAP mail server in Rust that runs my email every day, self-hosted on my home Linux server"
                    githubLink="https://github.com/tanndlin/rs-smtp"
                    technologies={[
                        <Tech.RustTech key="rust" />,
                        <Tech.SQLTech key="sql" />,
                        <Tech.DockerTech key="docker" />,
                    ]}
                >
                    <ul className="mt-1 list-disc">
                        <li className="ml-4">
                            Hand-written SMTP and IMAP protocol parsers —
                            command/response types and a per-connection state
                            machine, with no protocol crates.
                        </li>
                        <li className="ml-4">
                            Four-service architecture: SMTP ingest, IMAP server,
                            and a RabbitMQ consumer that persists mail to
                            PostgreSQL, all wired together with Docker Compose.
                        </li>
                        <li className="ml-4">
                            Compile-time-checked SQL via sqlx with versioned
                            migrations; async services built on Tokio.
                        </li>
                        <li className="ml-4">
                            Integration test suite driving real IMAP flows
                            (LOGIN, SELECT, FETCH, APPEND) against the running
                            server.
                        </li>
                    </ul>
                </CompactProject>

                <CompactProject
                    id="rs-http2"
                    title="rs-http2"
                    overview="An HTTP/2 server built up from the binary protocol, serving static files at roughly 150k requests/sec"
                    githubLink="https://github.com/tanndlin/rs-http2"
                    technologies={[<Tech.RustTech key="rust" />]}
                >
                    <ul className="mt-1 list-disc">
                        <li className="ml-4">
                            Full HTTP/2 framing layer — DATA, HEADERS, SETTINGS,
                            PING, GOAWAY, RST_STREAM, WINDOW_UPDATE, PRIORITY,
                            PUSH_PROMISE, and CONTINUATION.
                        </li>
                        <li className="ml-4">
                            HPACK header compression and the complete per-stream
                            state machine (idle / open / half-closed / reserved
                            / closed), each state modeled as its own type.
                        </li>
                        <li className="ml-4">
                            TLS via OpenSSL with ALPN negotiation and a per-core
                            thread pool, serving static files at roughly 150k
                            requests/sec on a Ryzen 9 7900X.
                        </li>
                    </ul>
                </CompactProject>

                <CompactProject
                    id="bittorrent"
                    title="BitTorrent Client"
                    overview="A BitTorrent client written from scratch in Rust that finds peers via trackers and the Mainline DHT and resumes interrupted downloads"
                    githubLink="https://github.com/tanndlin/BitTorrent"
                    technologies={[
                        <Tech.RustTech key="rust" />,
                        <Tech.DockerTech key="docker" />,
                    ]}
                >
                    <ul className="mt-1 list-disc">
                        <li className="ml-4">
                            Hand-written bencode encoder/decoder and
                            implementation of the peer wire protocol, with SHA-1
                            verification of every downloaded piece.
                        </li>
                        <li className="ml-4">
                            Finds peers through HTTP trackers and the Mainline
                            DHT (KRPC over UDP).
                        </li>
                        <li className="ml-4">
                            Downloads from many peers at once, one thread per
                            peer.
                        </li>
                        <li className="ml-4">
                            Journals completed pieces to disk so a stopped
                            download picks up where it left off instead of
                            starting over.
                        </li>
                        <li className="ml-4">
                            Docker Compose test setup with a local tracker and
                            five qBittorrent peers to test against real clients.
                        </li>
                    </ul>
                </CompactProject>

                <CompactProject
                    id="open-deck"
                    title="Open Deck"
                    overview="A reverse-engineered Elgato Stream Deck MK2 driver and web UI, shipped as one Rust binary"
                    githubLink="https://github.com/tanndlin/open-deck"
                    technologies={[
                        <Tech.RustTech key="rust" />,
                        <Tech.ReactTech key="react" />,
                    ]}
                >
                    <ul className="mt-1 list-disc">
                        <li className="ml-4">
                            Reverse-engineered Elgato's first-party Stream Deck
                            software to write an independent driver.
                        </li>
                        <li className="ml-4">
                            Polls the Stream Deck over raw HID and renders
                            text/images onto its keys, with nested folder pages
                            for organizing actions.
                        </li>
                        <li className="ml-4">
                            An axum web server with a WebSocket channel keeps
                            the React UI in lockstep with the physical device;
                            the compiled frontend is embedded into the binary,
                            so distribution is a single file.
                        </li>
                        <li className="ml-4">
                            Drives the local Discord desktop client over its RPC
                            IPC socket to join voice channels; cross-compiled
                            for Linux and Windows in CI and published to a
                            rolling release.
                        </li>
                    </ul>
                </CompactProject>
            </div>
        </article>
    );
}

export default ProjectsPage;
