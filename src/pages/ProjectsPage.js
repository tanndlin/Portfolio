import React from 'react';
import Project from '../components/Project';
import lionImg from '../img/lion.png';
import contactManagerImg from '../img/contact-manager-ss.png';

function ProjectsPage() {
    return (
        <div id='projects' className='min-h-screen flex w-full'>

            <article className="container w-full m-auto text-white flex flex-col gap-8">
                <h1 className="text-3xl">Personal Projects</h1>
                <Project
                    title='Lion'
                    link='https://github.com/cs-discord-at-ucf/lion'
                    img={lionImg}
                    side='left'
                >
                    <p>
                        Lead Developer of Lion, a discord bot developed in
                        TypeScript with over 30 contributors. Helps manage the
                        UCF CS Discord, making the life of the average user and
                        moderator easier, serving <b>10,000+</b> users.
                    </p>
                </Project>

                <Project
                    title='Contact Manager'
                    link='https://github.com/tanndlin/Contact-Manager'
                    img={contactManagerImg}
                    side='right'
                >
                    <p>
                        Sole frontend eningeer on a fullstack website application
                        for managing a user's contacts <br />
                        <a href='/cmindex.html' target="_blank" rel="noopener noreferrer"> <b>Check Me Out</b> (Some Features will not work as I adapted this to work without a backend and API)</a>
                    </p>
                </Project>
            </article>
        </div>
    );

}

export default ProjectsPage;