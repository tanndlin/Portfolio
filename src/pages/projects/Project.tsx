import React from 'react';
import ExternalIcon from './ExternalIcon';
import Icon from './GitHubIcon';

interface ProjectProps {
    title: string;
    overview?: string;
    technologies: (string | JSX.Element)[];
    link?: string;
    githubLink: string;
    img: string;
    children: React.ReactNode;
}

function Project(props: ProjectProps) {
    const { title, technologies, link, githubLink, img, children } = props;

    const getHeader = () => {
        const realLink = link ?? githubLink;
        return (
            <a className="glow" href={realLink}>
                {title}
            </a>
        );
    };

    return (
        <section className="relative project">
            <div className="w-3/5 pb-4 project-card z-[1] flex flex-col gap-4 relative">
                <header className="p-4 font-mono rounded-t-2xl bg-tertiary project-header">
                    <h1 className="text-2xl">{getHeader()}</h1>
                    <p>{props.overview}</p>
                </header>
                <div className="flex flex-col gap-4 px-4">
                    <div className="font-mono description">{children}</div>
                    <TechContainer
                        technologies={technologies}
                        githubLink={githubLink}
                        link={link}
                    />
                </div>
            </div>
            <a
                className="absolute top-0 h-full projectDisplay"
                href={link ?? githubLink}
            >
                <img className="w-full h-full" src={img} alt="Project" />
            </a>
        </section>
    );
}

function TechContainer({
    technologies,
    githubLink,
    link,
}: {
    technologies: (string | JSX.Element)[];
    githubLink: string;
    link?: string;
}) {
    return (
        <footer className="flex justify-between">
            <ul className="flex gap-4">
                {technologies.map((tech, index) => {
                    return <li key={index}>{tech}</li>;
                })}
            </ul>
            <span className="flex gap-4 ">
                {link && (
                    <a className="project-link" href={link}>
                        <ExternalIcon />
                    </a>
                )}
                <a className="project-link hover:fill-white" href={githubLink}>
                    <Icon className="w-6 h-6" />
                </a>
            </span>
        </footer>
    );
}

export default Project;
