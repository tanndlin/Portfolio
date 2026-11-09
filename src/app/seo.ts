import type { Metadata } from 'next';

// Generated at build time by app/opengraph-image.tsx.
const OG_IMAGE = {
    url: '/opengraph-image',
    width: 1200,
    height: 630,
    alt: 'Tanner Sandlin, Software Engineer: compilers, protocols, and systems in Rust',
};

/**
 * A page's `openGraph`/`twitter` metadata replaces the parent's whole object
 * instead of merging into it, so each page builds its full set here to keep the
 * preview image and card type.
 */
export function pageMetadata(
    title: string,
    description: string,
    path: string,
): Metadata {
    return {
        description,
        alternates: { canonical: path },
        openGraph: {
            type: 'website',
            url: path,
            siteName: 'Tanner Sandlin',
            locale: 'en_US',
            title,
            description,
            images: [OG_IMAGE],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [OG_IMAGE],
        },
    };
}
