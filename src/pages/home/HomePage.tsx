import React from 'react';

function HomePage() {
    return (
        <article id="home" className="flex flex-1 w-full mx-auto max-sm:px-4">
            <div className="mx-auto">
                <h2 className="font-mono text-3xl">Hi, my name is</h2>
                <h1 className="font-bold text-7xl transition-header">
                    Tanner Sandlin
                </h1>
                <div className="flex gap-2 mt-4 font-mono text-xl">
                    <p className="glow">Software Engineer</p>
                    <p>|</p>
                    <p className="glow">CS @ UCF '24</p>
                    <p>|</p>
                    <p className="glow">HCI M.S. Student @ Georiga Tech</p>
                </div>
            </div>
        </article>
    );
}

export default HomePage;
