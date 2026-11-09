import type { ReactNode } from 'react';
import { TechContainer } from './Project';

interface CompactProjectProps {
    id: string;
    title: string;
    overview: string;
    technologies: ReactNode[];
    link?: string;
    githubLink: string;
    img?: string;
    /** Detail shown behind a "Key features" toggle. */
    children?: ReactNode;
}

function CompactProject(props: CompactProjectProps) {
    const { id, title, overview, technologies, link, githubLink, img, children } =
        props;

    const realLink = link ?? githubLink;

    return (
        <section
            id={id}
            className="flex flex-col overflow-hidden compact-project scroll-mt-24"
        >
            {img && (
                <a className="block aspect-[2/1] overflow-hidden" href={realLink}>
                    <img
                        className="object-cover w-full h-full opacity-80 transition-opacity hover:opacity-100"
                        src={img}
                        alt={`${title} preview`}
                        loading="lazy"
                        decoding="async"
                    />
                </a>
            )}
            <div className="flex flex-col flex-1 gap-3 px-5 py-4">
                <header>
                    <h2 className="text-lg font-semibold">
                        <a
                            className="hover:accent-text glow transition-colors"
                            href={realLink}
                        >
                            {title}
                        </a>
                    </h2>
                    <p className="mt-1 text-sm text-muted">{overview}</p>
                </header>
                {children && (
                    <details className="font-mono text-sm leading-relaxed text-muted">
                        <summary className="text-xs">Key features</summary>
                        <div className="mt-2">{children}</div>
                    </details>
                )}
                <TechContainer
                    technologies={technologies}
                    githubLink={githubLink}
                    link={link}
                />
            </div>
        </section>
    );
}

export default CompactProject;
