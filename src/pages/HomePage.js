import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className='bg-sky-500 h-minus-header flex'>
            <article className="container bg-blue-700 m-auto mt-32 rounded-md text-white p-3">
                <h1 className="text-7xl text-center">Tanner Sandlin</h1>
                <h2 className="text-3xl text-center">Self-Taught Developer and CS Student</h2>

                <div className="flex">
                    <Link
                        className="text-2xl mx-auto my-10 p-3 border-2 border-black rounded-md"
                        to={{ pathname: '/projects' }}>
                        View Projects
                    </Link>
                </div>

            </article>
        </div>
    );
}

export default HomePage;