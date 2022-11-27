import React from 'react'
import Experience from '../components/Experience'

const ExperiencePage = () => {
    return (
        <div id='experience' className='min-h-screen flex min-w-[400px]'>

            <article className="container bg-blue-700 m-auto rounded-md text-white p-3 shadow-2xl">
                <h1 className="text-7xl text-center">Experience</h1>
                <Experience title={'Georgia Tech Research Institute'} date={'Oct 2022 - Present'}>
                    <li>Software Engineer Intern</li>
                    <li>C# Frontend Developer using .NET framework to create GUIs for desktop applications</li>
                </Experience>
            </article>
        </div>
    )
}

export default ExperiencePage