function HomePage() {
    return (
        <article id="home" className="flex flex-1 w-full mx-auto max-sm:px-4">
            <div className="mx-auto">
                <div className="flex">
                    <div>
                        <h2 className="mt-8 font-mono text-3xl">
                            Hi, my name is
                        </h2>
                        <h1 className="font-bold text-7xl transition-header">
                            Tanner Sandlin
                        </h1>
                    </div>
                    <img
                        id="pfp"
                        className="mt-auto ml-auto rounded-circle brightness-110"
                        src="/pfp.jpg"
                        alt="Profile Picture"
                    />
                </div>
                <div className="flex gap-2 mt-4 font-mono text-xl max-sm:flex-col">
                    <p className="glow">Software Engineer</p>
                    <p className="max-sm:hidden">|</p>
                    <p className="glow">CS @ UCF '24</p>
                    <p className="max-sm:hidden">|</p>
                    <p className="glow">HCI M.S. Student @ Georiga Tech</p>
                </div>
            </div>
        </article>
    );
}

export default HomePage;
