import React from 'react';

function HomePage() {
    return (
        <article id="home" className="flex flex-1 w-full mx-auto max-sm:px-4">
            <div className="mx-auto">
                <h2 className="font-mono text-3xl">Hi, my name is</h2>
                <h1 className="font-bold text-7xl transition-header">
                    Tanner Sandlin
                </h1>
                <p className="mt-4 text-xl">
                    I am a software engineer and a CS grad from the University
                    of Central Florida.
                </p>
            </div>
        </article>
    );
}

export default HomePage;
