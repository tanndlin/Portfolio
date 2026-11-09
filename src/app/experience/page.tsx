import type { Metadata } from 'next';
import ExperiencePage from '../../views/experience/ExperiencePage';
import { pageMetadata } from '../seo';

export const metadata: Metadata = {
    title: 'Experience',
    ...pageMetadata(
        'Experience | Tanner Sandlin',
        'Cloud Security Engineer at CFX; previously lead Fullstack Software Engineer at GTRI (Georgia Tech Research Institute).',
        '/experience/',
    ),
};

export default function Page() {
    return <ExperiencePage />;
}
