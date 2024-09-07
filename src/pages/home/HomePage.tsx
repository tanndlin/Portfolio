import React from 'react';

function HomePage() {
    return (
        <div id="home" className="flex w-full min-h-screen">
            <article className="m-auto text-white">
                <h2 className="font-mono text-3xl">Hi, my name is</h2>
                <h1 className="font-bold text-7xl opacity-70">
                    Tanner Sandlin
                </h1>
                <p className="mt-4 text-xl">
                    I am a software engineer and a CS grad from the University
                    of Central Florida.
                </p>
            </article>
        </div>
    );
}

export default HomePage;
