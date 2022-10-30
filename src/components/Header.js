import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className='grid grid-cols-3 h-16 bg-black text-white border-b-8 border-indigo-600'>
            <h1 className='text-4xl my-auto ml-4'>Sandlin</h1>
            <nav className='col-start-3 my-auto'>
                <ul className='flex my-auto gap-3 float-right'>
                    <Link className='mx-4 text-xl' to={{ pathname: '/' }}>Home</Link>
                    <Link className='mx-4 text-xl' to={{ pathname: '/projects' }}>Projects</Link>
                    <Link className='mx-4 text-xl' to={{ pathname: '/' }}>Contact</Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
