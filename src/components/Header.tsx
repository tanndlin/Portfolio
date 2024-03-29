import React from 'react';

function Header() {
    return (
        <header className="header grid h-16 text-white bg-primary fixed w-full z-50">
            <h1 className="text-4xl my-auto ml-4">Sandlin</h1>
            <nav className="col-start-3 my-auto">
                <ul className="flex my-auto gap-3 float-right text-lg">
                    <li>
                        <a className="mx-4 text-md glow" href="#home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="mx-4 text-md glow" href="#projects">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a className="mx-4 text-md glow" href="#experience">
                            Experience
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
