import React from 'react';
import Project from './Project';
import lionImg from '../../img/lion.png';
import contactManagerImg from '../../img/contact-manager-ss.png';
import noteTakerImg from '../../img/note-taker-ss.png';
import budgie from '../../img/budgie.png';
import dynamiCalcImg from '../../img/dynamiCalc-ss.png';

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
                    technologies={['React', 'Firebase', 'Flutter', 'ExpressJS']}
                >
                    <p>
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
                    technologies={[
                        'TypeScript',
                        'Discord API',
                        'MongoDB',
                        'Docker',
                    ]}
                >
                    <p>
                        Lead Developer of Lion, a discord bot developed in
                        TypeScript with over 30 contributors. Helps manage the
                        UCF CS Discord, making the life of the average user and
                        moderator easier, serving <b>10,000+</b> users.
                    </p>
                </Project>

                <Project
                    title="Note Taker"
                    githubLink="https://github.com/tanndlin/NoteTaker"
                    link="https://notetaker.tanndlin.com"
                    img={noteTakerImg}
                    technologies={['React', 'TypeScript']}
                >
                    <p>
                        A note taking app that utilizes markdown to render
                        styled notes.
                    </p>

                    <ul className="list-disc">
                        <li className="ml-4">
                            Takes advantage of hyperlinks to quickly reference
                            other notes, and allows for easy navigation between
                            related notes
                        </li>
                        <li className="ml-4">
                            Graph feature to visualize the relationships between
                            notes.
                        </li>
                        <li className="ml-4">
                            Stores and displays notes in file system tree
                            structure for easy organization
                        </li>
                    </ul>
                </Project>

                <Project
                    title="Contact Manager"
                    link="/cmindex.html"
                    githubLink="https://github.com/tanndlin/Contact-Manager"
                    img={contactManagerImg}
                    technologies={['Pure HTML/CSS', 'JavaScript', 'SQL', 'Php']}
                >
                    <p>
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

                <Project
                    title="DynamiCalc"
                    githubLink="https://github.com/tanndlin/DynamiCalc"
                    link="https://dynamicalc.tanndlin.com"
                    technologies={['React', 'TypeScript']}
                    img={dynamiCalcImg}
                >
                    <p>
                        Most calculators have static variables that do not
                        change after being set. DynamiCalc allows users to
                        create dynamic variables that change as the user inputs
                        new values.
                    </p>
                </Project>
            </article>
        </div>
    );
}

export default ProjectsPage;
