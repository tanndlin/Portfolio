import React from 'react';

interface SocialLinkProps {
    link: string;
    logo: string;
    alt: string;
    className?: string;
}

function SocialLink(props: SocialLinkProps) {
    return (
        <span className="flex w-12 socialLink cursor-pointer p-2 rounded-md">
            <a
                className="m-auto"
                href={props.link}
                target="_blank"
                rel="noopener noreferrer"
            >
                {props.className && (
                    <img
                        className={props.className}
                        src={props.logo}
                        alt={props.alt}
                    />
                )}
                {!props.className && <img src={props.logo} alt={props.alt} />}
            </a>
        </span>
    );
}

export default SocialLink;
