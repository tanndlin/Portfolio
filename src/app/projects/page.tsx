import type { Metadata } from 'next';
import ProjectsPage from '../../views/projects/ProjectsPage';
import { pageMetadata } from '../seo';

export const metadata: Metadata = {
    title: 'Projects',
    ...pageMetadata(
        'Projects | Tanner Sandlin',
        'Personal projects: TanScript (a compiler written in Rust that emits x86-64), CodeBattle, a self-hosted mail server, a log ingestion platform, a ray tracer, a BitTorrent client, and more.',
        '/projects/',
    ),
};

export default function Page() {
    return <ProjectsPage />;
}
