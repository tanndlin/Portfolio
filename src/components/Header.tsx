import React from 'react';
import AnimatedLink from './AnimatedLink';

function Header() {
    return (
        <header className="z-50 grid w-full text-white header">
            <h1 className="my-auto ml-4 text-4xl">Sandlin</h1>
            <nav className="col-start-3 my-auto">
                <ul className="flex float-right gap-3 my-auto text-lg">
                    <li>
                        <AnimatedLink className="mx-4 text-md glow" to="/">
                            Home
                        </AnimatedLink>
                    </li>
                    <li>
                        <AnimatedLink
                            className="mx-4 text-md glow"
                            to="/projects"
                        >
                            Projects
                        </AnimatedLink>
                    </li>
                    <li>
                        <AnimatedLink
                            className="mx-4 text-md glow"
                            to="/experience"
                        >
                            Experience
                        </AnimatedLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
