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
        <section className="flex justify-between p-3 mx-5 my-10 rounded-md shadow-2xl bg-tertiary">
            <div>
                <span className="flex text-2xl">
                    <h1>{props.title}</h1>
                    <p className="mx-2">@</p>
                    <a
                        className="underline text-secondary"
                        href={props.company.link}
                    >
                        {props.company.name}
                    </a>
                </span>
                <ul className="ml-8 font-mono list-disc">{props.children}</ul>
            </div>

            <div>
                <h2>{props.date}</h2>
            </div>
        </section>
    );
}

export default Experience;
