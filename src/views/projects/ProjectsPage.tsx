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
                    overview="A compiled programming language built from scratch using TypeScript"
                    githubLink="https://github.com/tanndlin/tanscript"
                    technologies={[<Tech.TypeScriptTech key="ts" />]}
                    img={
                        'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg'
                    }
                >
                    <p>
                        <b>Key features:</b>
                    </p>
                    <ul className="mt-1 list-disc">
                        <li className="ml-4">
                            Compiles to AMD64 instruction set
                        </li>
                        <li className="ml-4">
                            Functions and lambdas that can be passed around as
                            first class citizens.
                        </li>
                        <li className="ml-4">
                            Signals implementation that allows for easy event
                            driven mathematics using a dependency graph models
                            to update variables only as needed.
                        </li>
                        <li className="ml-4">
                            Full support for all math operators, and nested
                            expressions with parenthesis.
                        </li>
                        <li className="ml-4">Support for strings</li>
                        <li className="ml-4">
                            Support for objects which can have methods and
                            properties
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
                            Uses Bounding Volume Hierarchy (BVH) to speed up to
                            cull faces to speed up rendering.
                        </li>
                        <li className="ml-4">
                            Supports object instancing to minimize memory usage,
                            allowing whole scenes to fit within L1 cache for
                            maximum performance.
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
                            Ships as a clap CLI with live indicatif progress
                            bars.
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
                        Entire e-mail stack hosted on my at-home Linux Server
                        that I use every day through Thunderbird
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
                            Reverse engineered first-party Elgato StreamDeck
                            software to create a driver of my own.
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
                        A budget tracker app that allows users to keep track of
                        recurring bills, grocery budgets, and one time expenses.
                        I was the lead front end eningeer for the website and
                        helped oversee the development of the expressJS API.
                    </p>
                </Project>

                <Project
                    title="Note Taker"
                    overview="A note taking app that utilizes markdown to render styled notes"
                    githubLink="https://github.com/tanndlin/NoteTaker"
                    link="https://notetaker.tanndlin.com"
                    img={'/note-taker-ss.webp'}
                    technologies={[
                        <Tech.ReactTech key="react" />,
                        <Tech.TypeScriptTech key="ts" />,
                    ]}
                >
                    <ul className="mt-1 list-disc">
                        <li className="ml-4">
                            Takes advantage of hyperlinks to quickly reference
                            other notes, and allows for easy navigation between
                            related notes
                        </li>
                        <li className="ml-4">
                            Graph feature to visualize the relationships between
                            notes.
                        </li>
                        <li className="ml-4">
                            Stores and displays notes in file system tree
                            structure for easy organization
                        </li>
                    </ul>
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
                        Most calculators have static variables that do not
                        change after being set. DynamiCalc allows users to
                        create dynamic variables that change as the user inputs
                        new values.
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
                        Lead Developer of Lion, a discord bot developed in
                        TypeScript with over 30 contributors. Helps manage the
                        UCF CS Discord, making the life of the average user and
                        moderator easier, serving <b>14,000+</b> users.
                    </p>
                </Project>
            </div>
        </article>
    );
}

export default ProjectsPage;
