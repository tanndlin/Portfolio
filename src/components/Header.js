import React from 'react';

function Header() {
    return (
        <header className='grid h-16 bg-black text-white border-b-8 border-indigo-600 fixed w-full z-50'>
            <h1 className='text-4xl my-auto ml-4'>Sandlin</h1>
            <nav className='col-start-3 my-auto'>
                <ul className='flex my-auto gap-3 float-right'>
                    <a className='mx-4 text-md'
                        href='#home'
                    >Home</a>
                    <a className='mx-4 text-md'
                        href='#projects'
                    >Projects</a>
                    <a className='mx-4 text-md'
                        href='#experience'
                    >Experience</a>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
