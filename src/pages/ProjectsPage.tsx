import React from 'react';
import Project from '../components/Project';
import lionImg from '../img/lion.png';
import contactManagerImg from '../img/contact-manager-ss.png';
import budgie from '../img/budgie.png';

function ProjectsPage() {
    return (
        <div id="projects" className="min-h-screen flex w-full">
            <article className="container w-full m-auto text-white flex flex-col gap-8">
                <h1 className="text-4xl mb-24 font-mono">Personal Projects</h1>

                <Project
                    title="Budgie"
                    link="https://budgie.live"
                    githubLink="https://github.com/tanndlin/Budgie"
                    img={budgie}
                    side="right"
                    technologies={['React', 'Firebase', 'Flutter', 'ExpressJS']}
                >
                    <p className="font-mono">
                        A budgie tracker app that allows users to keep track of
                        recurring bills, grocery budgets, and one time expenses.
                        I was the lead front end eningeer for the website and
                        helped oversee the development of the expressJS API.
                    </p>
                </Project>

                <Project
                    title="Lion"
                    githubLink="https://github.com/cs-discord-at-ucf/lion"
                    img={lionImg}
                    side="left"
                    technologies={[
                        'TypeScript',
                        'Discord API',
                        'MongoDB',
                        'Docker',
                    ]}
                >
                    <p className="font-mono">
                        Lead Developer of Lion, a discord bot developed in
                        TypeScript with over 30 contributors. Helps manage the
                        UCF CS Discord, making the life of the average user and
                        moderator easier, serving <b>10,000+</b> users.
                    </p>
                </Project>

                <Project
                    title="Contact Manager"
                    link="/cmindex.html"
                    githubLink="https://github.com/tanndlin/Contact-Manager"
                    img={contactManagerImg}
                    side="right"
                    technologies={['Pure HTML/CSS', 'JavaScript', 'SQL', 'Php']}
                >
                    <p className="font-mono">
                        Sole frontend eningeer on a fullstack website
                        application for managing a user's contacts <br />
                        <a
                            href="/cmindex.html"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {' '}
                            <b>Check Me Out</b> (Some Features will not work as
                            I adapted this to work without a backend and API)
                        </a>
                    </p>
                </Project>
            </article>
        </div>
    );
}

export default ProjectsPage;
