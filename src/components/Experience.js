import React from 'react';

function Experience(props) {
    return (
        <section className='project flex flex-cols p-3 my-10 mx-5 bg-indigo-600 rounded-md justify-between'>
            <div>
                <h1 className='text-2xl font-bold'>
                    {props.title}
                </h1>
                <ul className='list-disc ml-8'>
                    {props.children}
                </ul>
            </div>

            <div>
                <h2>{props.date}</h2>
            </div>
        </section>
    );
}

export default Experience;

