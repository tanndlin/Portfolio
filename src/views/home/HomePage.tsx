import Playground from './Playground';

// The systems behind the tagline, each with the fact that makes it real.
const STATS = [
    {
        value: 'x86-64',
        label: 'TanScript compiler',
        context: 'my own language; try it below',
        href: '#playground',
    },
    {
        value: 'SMTP + IMAP',
        label: 'tmail mail server',
        context: 'runs my email every day',
        href: '/projects/#tmail',
    },
    {
        value: 'HTTP/2',
        label: 'rs-http2 server',
        context: 'binary framing, HPACK, TLS',
        href: '/projects/#rs-http2',
    },
    {
        value: 'BitTorrent',
        label: 'from-scratch client',
        context: 'trackers + Mainline DHT',
        href: '/projects/#bittorrent',
    },
];

function StatsStrip() {
    return (
        <ul className="grid grid-cols-4 gap-px mt-16 overflow-hidden stats-strip max-md:grid-cols-2">
            {STATS.map((stat) => (
                <li key={stat.label}>
                    <a className="block h-full px-5 py-4 stat" href={stat.href}>
                        <span className="block text-2xl font-bold tracking-tight accent-text max-sm:text-xl">
                            {stat.value}
                        </span>
                        <span className="block mt-1 text-sm font-medium">
                            {stat.label}
                        </span>
                        <span className="block mt-1 font-mono text-xs text-muted">
                            {stat.context}
                        </span>
                    </a>
                </li>
            ))}
        </ul>
    );
}

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
                                I build systems from the protocol up, mostly in
                                Rust.
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
                    <StatsStrip />
                </div>
            </article>
            <Playground />
        </>
    );
}

export default HomePage;
