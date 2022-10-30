import React from 'react';
import { Link } from 'react-router-dom';
import Experience from '../components/Experience';
import Project from '../components/Project';


function ProjectsPage() {
    return (
        <div className='bg-sky-500 min-h-minus-header flex flex-col gap-4 justify'>

            <article className="container bg-blue-700 m-auto mt-16 rounded-md text-white p-3">
                <h1 className="text-7xl text-center">Personal Projects</h1>
                <Project title={'Lion'} link={'https://github.com/cs-discord-at-ucf/lion'}>
                    <li>Lead Developer of Lion, a discord bot developed in TypeScript</li>
                    <li>Helps manage the UCF CS Discord, making the life of the average user and moderator easier</li>
                    <li>Serves 10,000+ users</li>
                </Project>

                <Project title={'Contact Manager'} link={'https://github.com/tanndlin/Contact-Manager'}>
                    <li>Sole frontend eningeer on a fullstack website application for managing a user's contacts</li>
                    <li className='font-bold'><Link to={{ pathname: '/ContactManager' }}> Check Me Out</Link></li>
                </Project>
            </article>

            <article className="container bg-blue-700 m-auto mb-16 rounded-md text-white p-3">
                <h1 className="text-7xl text-center">Experience</h1>
                <Experience title={'Georgia Tech Research Institute'} date={'Oct 2022 - Present'}>
                    <li>Software Engineer Intern</li>
                    <li>C# Frontend Developer for .NET GUIs</li>
                </Experience>
            </article>

        </div>
    );

}

export default ProjectsPage;