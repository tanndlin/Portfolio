import React from 'react';

function HomePage() {
    return (
        <div id="home" className="min-h-screen flex w-full">
            <article className="m-auto text-white">
                <h2 className="text-3xl font-mono">Hi, my name is</h2>
                <h1 className="text-7xl font-bold opacity-70">
                    Tanner Sandlin
                </h1>
                <p className="text-xl mt-4">
                    I am a software engineer and a student at the University of
                    Central Florida.
                </p>
            </article>
        </div>
    );
}

export default HomePage;
