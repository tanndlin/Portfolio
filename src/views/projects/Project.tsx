import type { ReactNode } from 'react';
import ExternalIcon from './ExternalIcon';
import Icon from './GitHubIcon';

interface ProjectProps {
    title: string;
    overview?: string;
    technologies: ReactNode[];
    link?: string;
    githubLink: string;
    img: string;
    children: ReactNode;
}

function Project(props: ProjectProps) {
    const { title, technologies, link, githubLink, img, children } = props;

    const realLink = link ?? githubLink;

    return (
        <section className="relative project">
            <div className="w-3/5 project-card z-[1] flex flex-col relative">
                <header className="px-6 py-4 project-header">
                    <h1 className="text-xl font-semibold">
                        <a
                            className="hover:accent-text glow transition-colors"
                            href={realLink}
                        >
                            {title}
                        </a>
                    </h1>
                    {props.overview && (
                        <p className="text-muted text-sm mt-1">
                            {props.overview}
                        </p>
                    )}
                </header>
                <div className="flex flex-col gap-4 px-6 py-4 flex-1">
                    <div className="font-mono text-sm text-muted leading-relaxed">
                        {children}
                    </div>
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
                <img
                    className="w-full h-full object-cover"
                    src={img}
                    alt="Project"
                    loading="lazy"
                    decoding="async"
                />
            </a>
        </section>
    );
}

function TechContainer({
    technologies,
    githubLink,
    link,
}: {
    technologies: ReactNode[];
    githubLink: string;
    link?: string;
}) {
    return (
        <footer className="flex justify-between items-center mt-auto pt-2">
            <ul className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => {
                    return <li key={index}>{tech}</li>;
                })}
            </ul>
            <span className="flex gap-2 shrink-0">
                {link && (
                    <a className="project-link" href={link}>
                        <ExternalIcon />
                    </a>
                )}
                <a className="project-link hover:fill-white" href={githubLink}>
                    <Icon className="w-5 h-5" />
                </a>
            </span>
        </footer>
    );
}

export default Project;
