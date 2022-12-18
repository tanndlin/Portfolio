import React from 'react';
import Icon from './Icon';

function Project(props) {
    return (
        <section className='project'>
            <h1 className={`text-2xl mb-16 font-mono`}>
                {props.title}
            </h1>
            <div className='relative'>
                <ul className={`description list-disc pl-8 w-3/5 p-4 bg-gray-800 rounded-md shadow-xl`}>
                    {props.children}
                </ul>
                <footer className={`techContainer flex flex-col mt-4`}>
                    <ul className={`flex gap-4 text-gray-200`}>
                        {
                            props.technologies.map((tech, index) => {
                                return (
                                    <li key={index}>
                                        {tech}
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <a className={`projectLink flex mt-4 gap-4 w-min h-min hover:fill-white`} href={props.link}>
                        <Icon className={`w-8`} name='github' />
                    </a>
                </footer>
                <a
                    className={`projectDisplay max-w-[500px] absolute top-1/2 -translate-y-1/2 -z-[1] ${props.side === 'left' ? 'right-0' : 'left-0'}`}
                    href={props.link}>
                    <img className='min-h-[237px]' src={props.img} alt="Project" />
                </a>
            </div>
        </section>
    );
}

export default Project;