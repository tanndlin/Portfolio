import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

// Rendered once at build time; the site is a static export.
export const dynamic = 'force-static';

export const alt =
    'Tanner Sandlin, Software Engineer: compilers, protocols, and systems in Rust';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const BG = '#0f172a';
const CARD = '#1e293b';
const TEXT = '#f1f5f9';
const MUTED = '#94a3b8';
const ACCENT = '#2dd4bf';

const HIGHLIGHTS = [
    'x86-64 compiler for my own language',
    'SMTP + IMAP mail server',
    'HTTP/2 from scratch',
    'BitTorrent client',
];

const NAME = 'Tanner Sandlin';

/**
 * Inter at one weight, matching the site. Google Fonts serves TTF (which the
 * image renderer needs, unlike woff2) when no browser User-Agent is sent.
 * Returns null on failure so the image still builds with the default font.
 */
async function loadInter(weight: 400 | 700): Promise<ArrayBuffer | null> {
    try {
        const css = await fetch(
            `https://fonts.googleapis.com/css2?family=Inter:wght@${weight}`,
        ).then((r) => r.text());
        const url = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/)?.[1];
        if (!url) return null;
        const res = await fetch(url);
        return res.ok ? await res.arrayBuffer() : null;
    } catch {
        return null;
    }
}

export default async function OpengraphImage() {
    const pfp = await readFile(join(process.cwd(), 'public/pfp.jpg'));
    const pfpSrc = `data:image/jpeg;base64,${pfp.toString('base64')}`;
    const [regular, bold] = await Promise.all([loadInter(400), loadInter(700)]);
    const fonts =
        regular && bold
            ? [
                  { name: 'Inter', data: regular, weight: 400 as const, style: 'normal' as const },
                  { name: 'Inter', data: bold, weight: 700 as const, style: 'normal' as const },
              ]
            : undefined;

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '72px 80px',
                    background: BG,
                    backgroundImage: `radial-gradient(circle at 85% 15%, rgba(45, 212, 191, 0.18), transparent 45%)`,
                    color: TEXT,
                    fontFamily: fonts ? 'Inter' : 'sans-serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div
                            style={{
                                fontSize: 26,
                                letterSpacing: 6,
                                textTransform: 'uppercase',
                                color: ACCENT,
                                marginBottom: 16,
                            }}
                        >
                            tanndlin.com
                        </div>
                        <div
                            style={{
                                fontSize: 88,
                                fontWeight: 700,
                                letterSpacing: -2,
                                lineHeight: 1,
                            }}
                        >
                            {NAME}
                        </div>
                        <div
                            style={{
                                fontSize: 36,
                                color: MUTED,
                                marginTop: 20,
                            }}
                        >
                            Software Engineer · Systems in Rust
                        </div>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={pfpSrc}
                        width={200}
                        height={200}
                        alt=""
                        style={{
                            borderRadius: 9999,
                            border: `4px solid ${ACCENT}`,
                        }}
                    />
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
                    {HIGHLIGHTS.map((h) => (
                        <div
                            key={h}
                            style={{
                                display: 'flex',
                                padding: '12px 22px',
                                borderRadius: 12,
                                background: CARD,
                                border: '1px solid rgba(148, 163, 184, 0.2)',
                                fontSize: 26,
                                color: TEXT,
                            }}
                        >
                            {h}
                        </div>
                    ))}
                </div>
            </div>
        ),
        { ...size, fonts },
    );
}
