import Project from './Project';
import * as Tech from './Technologies';

function ProjectsPage() {
    return (
        <article id="projects" className="container flex-1 w-full py-12 m-auto">
            <h1 className="mb-16 section-title transition-header">
                Personal Projects
            </h1>
            <div className="flex flex-col gap-24">
                <Project
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
                    title="Ray Tracer"
                    overview="A ray tracer built in Rust"
                    githubLink="https://github.com/tanndlin/RustRayTracer"
                    technologies={[
                        <Tech.CPPTech key="cpp" />,
                        <Tech.RustTech key="rust" />,
                    ]}
                    img={
                        'https://github.com/tanndlin/RustRayTracer/blob/master/render.png?raw=true'
                    }
                >
                    <p>
                        <b>Key features:</b>
                    </p>
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
                </Project>

                <Project
                    title="tmail - Mail Server Stack"
                    overview="A from-scratch SMTP + IMAP mail server written in Rust"
                    githubLink="https://github.com/tanndlin/rs-smtp"
                    technologies={[
                        <Tech.RustTech key="rust" />,
                        <Tech.SQLTech key="sql" />,
                        <Tech.DockerTech key="docker" />,
                    ]}
                    img={
                        'https://opengraph.githubassets.com/1/tanndlin/rs-smtp'
                    }
                >
                    <p>
                        My entire email stack, self-hosted on my home Linux
                        server and used daily through Thunderbird.
                    </p>
                    <hr className="mb-2" />
                    <p>
                        <b>Key features:</b>
                    </p>
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
                </Project>

                <Project
                    title="tanlogs - Log Ingestion Platform"
                    overview="A self-hosted log ingestion, storage, and query platform written in Rust"
                    githubLink="https://github.com/tanndlin/log-ingestor"
                    technologies={[
                        <Tech.RustTech key="rust" />,
                        <Tech.SQLTech key="sql" />,
                        <Tech.ReactTech key="react" />,
                        <Tech.DockerTech key="docker" />,
                    ]}
                    img={'/tanlogs-architecture.webp'}
                >
                    <p>
                        Collects logs from the services running on my home Linux
                        server, including MovieHost, my self-hosted media
                        server.
                    </p>
                    <hr className="mb-2" />
                    <p>
                        <b>Key features:</b>
                    </p>
                    <ul className="mt-1 list-disc">
                        <li className="ml-4">
                            HTTP (axum) and raw TCP ingest endpoints feeding a
                            shared writer, with TCP frames encoded in the
                            compact postcard binary format.
                        </li>
                        <li className="ml-4">
                            Hand-built segmented write-ahead log with atomic,
                            fsync'd checkpoints, so logs survive an ingestor
                            crash or database outage and are replayed into
                            PostgreSQL from the last checkpoint on restart.
                        </li>
                        <li className="ml-4">
                            Batched inserts into PostgreSQL using UNNEST, with
                            retry on transient database failures.
                        </li>
                        <li className="ml-4">
                            Client SDK implemented as a tracing-subscriber
                            Layer, so any Rust service can ship its logs with a
                            single line of setup.
                        </li>
                        <li className="ml-4">
                            Separate query service and a React log viewer with
                            pagination, deployed with Docker Compose and built
                            by Jenkins CI.
                        </li>
                    </ul>
                </Project>

                <Project
                    title="BitTorrent Client"
                    overview="A BitTorrent client written from scratch in Rust"
                    githubLink="https://github.com/tanndlin/BitTorrent"
                    technologies={[
                        <Tech.RustTech key="rust" />,
                        <Tech.DockerTech key="docker" />,
                    ]}
                    img={
                        'https://opengraph.githubassets.com/1/tanndlin/BitTorrent'
                    }
                >
                    <p>
                        <b>Key features:</b>
                    </p>
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
                </Project>

                <Project
                    title="rs-http2"
                    overview="An HTTP/2 server implementing the binary protocol from the ground up"
                    githubLink="https://github.com/tanndlin/rs-http2"
                    technologies={[<Tech.RustTech key="rust" />]}
                    img={
                        'https://opengraph.githubassets.com/1/tanndlin/rs-http2'
                    }
                >
                    <p>
                        <b>Key features:</b>
                    </p>
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
                </Project>

                <Project
                    title="Open Deck"
                    overview="An Elgato Stream Deck MK2 driver and web UI, shipped as one Rust binary"
                    githubLink="https://github.com/tanndlin/open-deck"
                    technologies={[
                        <Tech.RustTech key="rust" />,
                        <Tech.ReactTech key="react" />,
                    ]}
                    img={
                        'https://opengraph.githubassets.com/1/tanndlin/open-deck'
                    }
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
                </Project>

                <Project
                    title="Budgie"
                    link="https://budgie.tanndlin.com"
                    githubLink="https://github.com/tanndlin/Budgie"
                    img={'/budgie.webp'}
                    technologies={[
                        <Tech.ReactTech key="react" />,
                        <Tech.FirebaseTech key="firebase" />,
                        <Tech.FlutterTech key="flutter" />,
                        <Tech.ExpressTech key="express" />,
                    ]}
                >
                    <p>
                        A budgeting app for tracking recurring bills, grocery
                        budgets, and one-time expenses. I was the lead front-end
                        engineer for the website and helped oversee development
                        of the Express.js API.
                    </p>
                </Project>

                <Project
                    title="DynamiCalc"
                    githubLink="https://github.com/tanndlin/DynamiCalc"
                    link="https://dynamicalc.tanndlin.com"
                    technologies={[
                        <Tech.ReactTech key="react" />,
                        <Tech.TypeScriptTech key="ts" />,
                    ]}
                    img={'/dynamiCalc-ss.webp'}
                >
                    <p>
                        Most calculators store variables as fixed values.
                        DynamiCalc lets users define variables as formulas that
                        update automatically whenever their inputs change.
                    </p>
                </Project>

                <Project
                    title="Lion"
                    githubLink="https://github.com/cs-discord-at-ucf/lion"
                    img={'/lion.webp'}
                    technologies={[
                        <Tech.TypeScriptTech key="ts" />,
                        <Tech.DiscordTech key="discord" />,
                        <Tech.MongoDBTech key="mongo" />,
                        <Tech.DockerTech key="docker" />,
                    ]}
                >
                    <p>
                        Lead developer of Lion, a TypeScript Discord bot with
                        30+ contributors that helps users and moderators manage
                        the UCF CS Discord server, serving <b>14,000+</b> users.
                    </p>
                </Project>
            </div>
        </article>
    );
}

export default ProjectsPage;
