import type { ReactNode } from 'react';

interface ExperienceProps {
    title: string;
    company: {
        name: string;
        link: string;
    };
    date: string;
    children: ReactNode;
}

function Experience(props: ExperienceProps) {
    return (
        <section className="my-8 experience-card">
            <header className="flex justify-between items-start px-6 py-4 experience-header flex-wrap gap-3">
                <div>
                    <h1 className="text-xl font-semibold">{props.title}</h1>
                    <span className="text-sm text-muted">
                        @{' '}
                        <a
                            className="accent-text hover:underline"
                            href={props.company.link}
                        >
                            {props.company.name}
                        </a>
                    </span>
                </div>
                <span className="font-mono text-xs text-muted bg-tertiary px-3 py-1.5 rounded-full border shrink-0">
                    {props.date}
                </span>
            </header>
            <div className="px-6 py-4">
                <ul className="ml-4 space-y-2 list-disc marker:text-accent">
                    {props.children}
                </ul>
            </div>
        </section>
    );
}

export default Experience;
