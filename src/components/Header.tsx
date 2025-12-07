import AnimatedLink from './AnimatedLink';

function Header() {
    return (
        <header className="grid px-4 header bg-[#222] mb-4">
            <h1 className="my-auto text-4xl">Sandlin</h1>
            <nav className="col-start-3 my-auto sm:ml-auto max-sm:text-right">
                <ul className="flex my-auto text-lg sm:gap-8 max-sm:flex-col">
                    <NavItem to="/" title="Home" />
                    <NavItem to="/projects" title="Projects" />
                    <NavItem to="/experience" title="Experience" />
                </ul>
            </nav>
        </header>
    );
}

function NavItem(props: { to: string; title: string }) {
    return (
        <li>
            <AnimatedLink className="text-md glow" to={props.to}>
                <p className="px-4 py-1 rounded-full  header-button bg-tertiary">
                    {props.title}
                </p>
            </AnimatedLink>
        </li>
    );
}

export default Header;
