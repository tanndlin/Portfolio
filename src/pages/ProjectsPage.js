import React from 'react';
import { Link } from 'react-router-dom';
import Experience from '../components/Experience';
import Project from '../components/Project';


function ProjectsPage() {
    return (
        <div className='bg min-h-minus-header flex flex-col gap-16'>

            <article className="container bg-blue-700 m-auto mb-0 mt-16 rounded-md text-white p-3">
                <h1 className="text-7xl text-center">Personal Projects</h1>
                <Project title={'Lion'} link={'https://github.com/cs-discord-at-ucf/lion'}>
                    <li>Lead Developer of Lion, a discord bot developed in TypeScript with over 30 contributors</li>
                    <li>Helps manage the UCF CS Discord, making the life of the average user and moderator easier, serving <b>10,000+</b> users</li>
                    <li>25,000 line diff since I joined the project in January 2021</li>
                </Project>

                <Project title={'Contact Manager'} link={'https://github.com/tanndlin/Contact-Manager'}>
                    <li>Sole frontend eningeer on a fullstack website application for managing a user's contacts</li>
                    <li className=''><Link to='/cmindex.html' target="_blank" rel="noopener noreferrer"> <b>Check Me Out</b> (Some Features will not work as I adapted this to work without a backend and API)</Link></li>
                </Project>
            </article>

            <article className="container bg-blue-700 m-auto mb-16 mt-0 rounded-md text-white p-3">
                <h1 className="text-7xl text-center">Experience</h1>
                <Experience title={'Georgia Tech Research Institute'} date={'Oct 2022 - Present'}>
                    <li>Software Engineer Intern</li>
                    <li>C# Frontend Developer using .NET framework to create GUIs for desktop applications</li>
                </Experience>
            </article>

        </div>
    );

}

export default ProjectsPage;