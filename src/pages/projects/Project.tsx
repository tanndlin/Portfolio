import React from 'react';
import Icon from './GitHubIcon';
import ExternalIcon from './ExternalIcon';

interface ProjectProps {
    title: string;
    technologies: string[];
    link?: string;
    githubLink: string;
    img: string;
    children: React.ReactNode;
}

function Project(props: ProjectProps) {
    return (
        <section className="project">
            <h1 className={`text-2xl mb-16 font-mono`}>{props.title}</h1>
            <div className="relative">
                <div
                    className={`description font-mono pl-8 w-3/5 p-4 bg-gray-800 rounded-md shadow-xl`}
                >
                    {props.children}
                </div>
                <footer className={`techContainer flex flex-col mt-4`}>
                    <ul className={`flex gap-4`}>
                        {props.technologies.map((tech, index) => {
                            return <li key={index}>{tech}</li>;
                        })}
                    </ul>
                    <span className="links">
                        <a
                            className="projectLink hover:fill-white"
                            href={props.githubLink}
                        >
                            <Icon className="w-8" />
                        </a>
                        {props.link && (
                            <a className="projectLink" href={props.link}>
                                <ExternalIcon />
                            </a>
                        )}
                    </span>
                </footer>
                <a
                    className={`projectDisplay max-w-[500px] absolute top-1/2 -translate-y-1/2 -z-[1]`}
                    href={props.link ?? props.githubLink}
                >
                    <img
                        className="min-h-[237px]"
                        src={props.img}
                        alt="Project"
                    />
                </a>
            </div>
        </section>
    );
}

export default Project;
