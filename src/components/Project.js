import React from 'react';

function Project(props) {
    return (
        <section className=''>
            <div>
                <h1 className={`text-2xl mb-16 ${props.side === 'right' && 'text-right'}`}>
                    {props.title}
                </h1>
                <div className='flex flex-row relative'>
                    <ul className={`${props.side === 'right' && 'ml-auto'} list-disc pl-8 w-3/5 p-4 bg-gray-800 rounded-md shadow-xl`}>
                        {props.children}
                    </ul>
                    <a
                        className={`w-3/4 max-w-[500px] absolute top-1/2 -translate-y-1/2 -z-10 ${props.side === 'left' ? 'right-0' : 'left-0'}`}
                        href={props.link}>
                        <img className='min-h-[237px]' src={props.img} alt="Project" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Project;

