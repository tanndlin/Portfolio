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
        <section className="my-10 rounded-md shadow-2xl max-sm:flex-col max-sm:gap-16 bg-[#222] experience-card">
            <header className="flex justify-between px-4 py-2 rounded-t-md bg-tertiary experience-header">
                <span className="flex text-2xl">
                    <h1>{props.title}</h1>
                    <p className="mx-2">@</p>
                    <a
                        className="underline text-text-color glow"
                        href={props.company.link}
                    >
                        {props.company.name}
                    </a>
                </span>
                <h2>{props.date}</h2>
            </header>
            <div className="p-4">
                <ul className="ml-8 list-disc">{props.children}</ul>
            </div>
        </section>
    );
}

export default Experience;
