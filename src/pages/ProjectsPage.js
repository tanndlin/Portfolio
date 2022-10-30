import React from 'react';
import { Link } from 'react-router-dom';
import Project from '../components/Project';

function ProjectsPage() {
    return (
        <div className='bg-sky-500 h-minus-header flex'>
            <article className="container bg-blue-700 m-auto mt-32 rounded-md text-white p-3">

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
        </div>
    );

}

export default ProjectsPage;