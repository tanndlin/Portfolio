'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Header() {
    return (
        <header className="sticky top-0 z-50 header header-nav">
            <div className="flex items-center justify-between h-full max-w-5xl px-6 mx-auto">
                <Link
                    href="/"
                    className="text-xl font-bold tracking-tight transition-header"
                >
                    <span className="accent-text">T</span>anner Sandlin
                </Link>
                <nav>
                    <ul className="flex gap-1">
                        <NavItem to="/" title="Home" />
                        <NavItem to="/projects" title="Projects" />
                        <NavItem to="/experience" title="Experience" />
                    </ul>
                </nav>
            </div>
        </header>
    );
}

function NavItem(props: { to: string; title: string }) {
    const pathname = usePathname();
    const normalizedTo = props.to.endsWith('/') ? props.to : props.to + '/';
    const normalizedPathname = pathname.endsWith('/') ? pathname : pathname + '/';
    const isActive = normalizedPathname === normalizedTo;

    return (
        <li>
            <Link
                href={props.to}
                className={`nav-link px-4 py-2 rounded-lg text-sm font-medium block ${isActive ? 'active' : ''}`}
            >
                {props.title}
            </Link>
        </li>
    );
}

export default Header;
