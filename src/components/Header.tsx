import React from 'react';
import AnimatedLink from './AnimatedLink';

function Header() {
    return (
        <header className="grid px-4 header">
            <h1 className="my-auto text-4xl">Sandlin</h1>
            <nav className="col-start-3 my-auto sm:ml-auto max-sm:text-right">
                <ul className="flex my-auto text-lg sm:gap-8 max-sm:flex-col">
                    <li>
                        <AnimatedLink className="text-md glow" to="/">
                            Home
                        </AnimatedLink>
                    </li>
                    <li>
                        <AnimatedLink className="text-md glow" to="/projects">
                            Projects
                        </AnimatedLink>
                    </li>
                    <li>
                        <AnimatedLink className="text-md glow" to="/experience">
                            Experience
                        </AnimatedLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
