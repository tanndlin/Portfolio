import React from 'react';
import Icon from './Icon';

function Project(props) {
    return (
        <section className=''>
            <div>
                <h1 className={`text-2xl mb-16 ${props.side === 'right' && 'text-right'}`}>
                    {props.title}
                </h1>
                <div className='relative'>
                    <ul className={`${props.side === 'right' && 'ml-auto'} list-disc pl-8 w-3/5 p-4 bg-gray-800 rounded-md shadow-xl`}>
                        {props.children}
                    </ul>
                    <footer className={`${props.side === 'right' && 'float-right'} flex flex-col mt-4`}>
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
                        <a className={`${props.side === 'right' && 'justify-end'} flex mt-4 gap-4`} href={props.link}>
                            <Icon className={`${props.side === 'right' && 'right-0'} w-8`} name='github' />
                        </a>
                    </footer>
                    <a
                        className={`max-w-[500px] absolute top-1/2 -translate-y-1/2 -z-10 ${props.side === 'left' ? 'right-0' : 'left-0'}`}
                        href={props.link}>
                        <img className='min-h-[237px]' src={props.img} alt="Project" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Project;