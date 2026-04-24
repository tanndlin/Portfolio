import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.scss';
import Container from '../components/Container';
import Header from '../components/Header';
import Socials from '../components/Socials';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Tanner Sandlin',
    description: 'Software Engineer portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={inter.variable}>
            <head>
                <link rel="icon" href="/pfp.jpg" />
                <meta name="theme-color" content="#0f172a" />
                {/* eslint-disable-next-line @next/next/no-sync-scripts */}
                <script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-EY3QSVR0D4"
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-EY3QSVR0D4');`,
                    }}
                />
            </head>
            <body>
                <Header />
                <Container>{children}</Container>
                <Socials />
            </body>
        </html>
    );
}
