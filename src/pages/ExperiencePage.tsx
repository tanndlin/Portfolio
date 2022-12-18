import React from 'react'
import Experience from '../components/Experience'

const ExperiencePage = () => {
    return (
        <div id='experience' className='min-h-screen flex min-w-[400px] font-mono'>
            <article className="container m-auto rounded-md text-white p-3">
                <h1 className="text-4xl mb-24">Experience</h1>
                <Experience
                    title='SWE Intern'
                    company={{
                        name: 'GTRI',
                        link: 'https://gtri.gatech.edu/'
                    }}
                    date={'Oct 2022 - Present'}>
                    <li>C# Frontend Developer using .NET framework to create GUIs for desktop applications</li>
                    <li>Currently obtaining security clearance</li>
                </Experience>
            </article>
        </div>
    )
}

export default ExperiencePage