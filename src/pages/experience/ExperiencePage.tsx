import React from 'react';
import Experience from './Experience';

const ExperiencePage = () => {
    return (
        <div
            id="experience"
            className="min-h-screen flex min-w-[400px] font-mono"
        >
            <article className="container m-auto rounded-md text-white p-3">
                <h1 className="text-4xl mb-24">Experience</h1>
                <Experience
                    title="SWE Intern"
                    company={{
                        name: 'GTRI',
                        link: 'https://gtri.gatech.edu/',
                    }}
                    date={'Oct 2022 - Present'}
                >
                    <li className="pr-4">
                        C# Developer using the .NET framework to create
                        applications for the communication and translation of
                        data across various packet standards such as DIS and
                        TENA
                    </li>
                    <li>Obtained security clearance in December of 2022</li>
                </Experience>
            </article>
        </div>
    );
};

export default ExperiencePage;
