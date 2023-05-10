import React from 'react';
import Icon from './GitHubIcon';
import ExternalIcon from './ExternalIcon';

interface ProjectProps {
    title: string;
    technologies: (string | JSX.Element)[];
    link?: string;
    githubLink: string;
    img: string;
    children: React.ReactNode;
}

function Project(props: ProjectProps) {
    const { title, technologies, link, githubLink, img, children } = props;

    const getHeader = () => {
        if (link) return <a href={link}>{title}</a>;

        return title;
    };

    return (
        <section className="project">
            <h1 className={`text-2xl mb-16 font-mono`}>{getHeader()}</h1>
            <div className="relative">
                <div
                    className={`description font-mono pl-8 w-3/5 p-4 bg-gray-800 rounded-md shadow-xl`}
                >
                    {children}
                </div>
                <footer className={`techContainer flex flex-col mt-4`}>
                    <ul className={`flex gap-4`}>
                        {technologies.map((tech, index) => {
                            return <li key={index}>{tech}</li>;
                        })}
                    </ul>
                    <span className="links">
                        <a
                            className="projectLink hover:fill-white"
                            href={githubLink}
                        >
                            <Icon className="w-8" />
                        </a>
                        {link && (
                            <a className="projectLink" href={link}>
                                <ExternalIcon />
                            </a>
                        )}
                    </span>
                </footer>
                <a
                    className={`projectDisplay max-w-[500px] absolute top-1/2 -translate-y-1/2 -z-[1]`}
                    href={link ?? githubLink}
                >
                    <img className="min-h-[237px]" src={img} alt="Project" />
                </a>
            </div>
        </section>
    );
}

export default Project;
