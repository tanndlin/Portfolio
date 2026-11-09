import type { ReactNode } from 'react';
import ExternalIcon from './ExternalIcon';
import Icon from './GitHubIcon';

interface ProjectProps {
    id: string;
    title: string;
    overview?: string;
    technologies: ReactNode[];
    link?: string;
    githubLink: string;
    img: string;
    /** Intrinsic image size, so the box is reserved before the lazy image loads. */
    imgWidth: number;
    imgHeight: number;
    caption?: ReactNode;
    children: ReactNode;
}

function Project(props: ProjectProps) {
    const {
        title,
        technologies,
        link,
        githubLink,
        img,
        imgWidth,
        imgHeight,
        caption,
        children,
    } = props;

    const realLink = link ?? githubLink;

    return (
        <section
            id={props.id}
            className="project flex items-center gap-8 max-md:flex-col scroll-mt-24"
        >
            <div className="w-3/5 max-md:w-full project-card flex flex-col">
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
            <figure className="w-2/5 max-md:w-full shrink-0">
                <a className="block projectDisplay" href={realLink}>
                    <img
                        className="block w-full h-auto"
                        src={img}
                        width={imgWidth}
                        height={imgHeight}
                        alt={`${title} preview`}
                        loading="lazy"
                        decoding="async"
                    />
                </a>
                {caption && (
                    <figcaption className="mt-3 font-mono text-xs leading-relaxed text-muted">
                        {caption}
                    </figcaption>
                )}
            </figure>
        </section>
    );
}

export function TechContainer({
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
