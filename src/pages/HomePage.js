import React from 'react';
import { Link } from 'react-router-dom';
import SocialLink from '../components/SocialLink';
import githubLogo from '../img/github.png';
import twitterLogo from '../img/twitter.png';
import linkedinLogo from '../img/linkedin.png';

function HomePage() {
    return (
        <div className='bg h-minus-header flex'>
            <article className="container bg-blue-700 m-auto mt-32 rounded-md text-white py-10">
                <h1 className="text-7xl text-center">Tanner Sandlin</h1>
                <h2 className="text-3xl text-center">Self-Taught Developer and CS Student</h2>

                <section className="flex flex-col">
                    <Link
                        className="text-2xl mx-auto my-10 p-3 px-16 border-4 border-white rounded-md hover:bg-white hover:text-blue-700"
                        to={{ pathname: '/projects' }}>
                        View Projects
                    </Link>
                    <div className='flex flex-row justify-center gap-16'>
                        <SocialLink link={'https://github.com/tanndlin'} logo={githubLogo} alt={'Github Logo'} />
                        <SocialLink link={'https://twitter.com/Tanner_Sandlin'} logo={twitterLogo} alt={'Twitter Logo'} />
                        <SocialLink className='w-10' link={'https://www.linkedin.com/in/tanner-sandlin/'} logo={linkedinLogo} alt={'LinkedIn Logo'} />
                    </div>
                </section>
            </article>
        </div>
    );
}

export default HomePage;