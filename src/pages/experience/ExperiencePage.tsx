import React from 'react';
import Experience from './Experience';

const ExperiencePage = () => {
    return (
        <div
            id="experience"
            className="min-h-screen flex min-w-[400px] font-mono"
        >
            <article className="container p-3 m-auto text-white rounded-md">
                <h1 className="mb-24 text-4xl">Experience</h1>
                <Experience
                    title="SWE Intern"
                    company={{
                        name: 'GTRI',
                        link: 'https://gtri.gatech.edu/',
                    }}
                    date={'Oct 2022 - June 2024'}
                >
                    <li className="pr-4">
                        C# Developer using the .NET framework to create
                        applications for the communication and translation of
                        data across various packet standards.
                    </li>
                    <li>Obtained security clearance in December of 2022</li>
                </Experience>
                <Experience
                    title="SWE"
                    company={{
                        name: 'GTRI',
                        link: 'https://gtri.gatech.edu/',
                    }}
                    date={'June 2024 - Present'}
                >
                    <li>
                        Lead software engineer on a team of 7 developers.
                        <ul className="mt-2 mb-4 ml-8 list-disc">
                            <li>
                                Scrum master for the team, leading daily standup
                            </li>
                            <li>
                                Created and executed a year long test plan to
                                create a test suite to assist our dev team in
                                delivering robust software on-time
                            </li>
                            <li>
                                Functional manager for 4 interns whom I mentored
                                and gave tasks to
                            </li>
                        </ul>
                    </li>
                    <li>
                        Converted many WPF applications to Blazor web-based
                        applications to allow easier containerization of our
                        deployment stack.
                    </li>
                    <li>
                        Deployed VMWare ESXi servers to host our software Suite
                        to various clients onsite.
                    </li>
                    <li>
                        Created automated deployment scripts and CI/CD pipelines
                        for our software suite.
                    </li>
                </Experience>
            </article>
        </div>
    );
};

export default ExperiencePage;
