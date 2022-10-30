import React from 'react';
import logo from '../img/github.png';

function Project(props) {
    return (
        <section className='flex flex-cols p-3 my-3 bg-indigo-600 rounded-md justify-between'>
            <div>
                <h1 className='text-2xl font-bold'>
                    {props.title}
                </h1>
                <ul className='list-disc ml-8'>
                    {props.children}
                </ul>
            </div>

            <div className='flex w-1/20'>
                <a className='right-0 top-0' href={props.link}>
                    <img className='' src={logo} alt="Github Logo" />
                </a>
            </div>
        </section>
    );
}

export default Project;
