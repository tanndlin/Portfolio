import React from 'react';

interface ExperienceProps {
    title: string;
    company: {
        name: string;
        link: string;
    };
    date: string;
    children: React.ReactNode;
}

function Experience(props: ExperienceProps) {
    return (
        <section className="flex p-3 my-10 mx-5 bg-gray-800 rounded-md justify-between shadow-2xl">
            <div>
                <span className="flex text-2xl">
                    <h1>{props.title}</h1>
                    <p className="mx-2">@</p>
                    <a
                        className="underline text-tertiary"
                        href={props.company.link}
                    >
                        {props.company.name}
                    </a>
                </span>
                <ul className="list-disc ml-8 font-mono">{props.children}</ul>
            </div>

            <div>
                <h2>{props.date}</h2>
            </div>
        </section>
    );
}

export default Experience;
