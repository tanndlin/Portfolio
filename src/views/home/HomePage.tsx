import Playground from './Playground';

function HomePage() {
    return (
        <>
            <article
                id="home"
                className="flex items-center flex-1 w-full py-20 max-sm:py-12"
            >
                <div className="w-full">
                    <div className="flex items-center justify-between gap-12 max-sm:flex-col max-sm:items-start">
                        <div className="flex-1">
                            <p className="mb-4 font-mono text-sm tracking-widest uppercase accent-text">
                                Hi, I&apos;m
                            </p>
                            <h1 className="mb-3 font-bold tracking-tight transition-header text-7xl max-sm:text-5xl">
                                Tanner Sandlin
                            </h1>
                            <p className="max-w-xl mb-8 text-xl leading-relaxed text-muted max-sm:text-lg">
                                I build systems from the protocol up: a compiler
                                for my own language, a mail server, an HTTP/2
                                server, and a BitTorrent client, all in Rust.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="role-tag">
                                    Cloud Security Engineer @ CFX
                                </span>
                                <span className="role-tag">
                                    CS @ UCF &apos;24
                                </span>
                                <span className="role-tag">
                                    HCI M.S. @ Georgia Tech
                                </span>
                            </div>
                        </div>
                        <img
                            id="pfp"
                            className="rounded-full ring-2 ring-accent/20 max-sm:self-center"
                            src="/pfp.jpg"
                            alt="Profile Picture"
                            fetchPriority="high"
                            decoding="async"
                        />
                    </div>
                </div>
            </article>
            <Playground />
        </>
    );
}

export default HomePage;
