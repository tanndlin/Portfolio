import React from 'react';

interface TechnologyProps {
    name: string;
    img?: string;
}

const Technology = (props: TechnologyProps) => {
    const { name, img } = props;

    return (
        <div className="flex">
            {img && (
                <img
                    src={img}
                    alt={name + ' logo'}
                    width="16px"
                    height="16px"
                    className="m-auto mr-1"
                />
            )}
            <p>{name}</p>
        </div>
    );
};

export const ReactTech = () => {
    return (
        <Technology
            name="React"
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"
        />
    );
};

export const FirebaseTech = () => {
    return (
        <Technology
            name="Firebase"
            img="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png"
        />
    );
};

export const FlutterTech = () => {
    return (
        <Technology
            name="Flutter"
            img="https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png"
        />
    );
};

export const ExpressTech = () => {
    return <Technology name="ExpressJS" />;
};

export const JavaScriptTech = () => {
    return (
        <Technology
            name="JavaScript"
            img="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
        />
    );
};

export const TypeScriptTech = () => {
    return (
        <Technology
            name="TypeScript"
            img="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
        />
    );
};

export const SQLTech = () => {
    return (
        <Technology
            name="SQL"
            img="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg"
        />
    );
};

export const PhpTech = () => {
    return (
        <Technology
            name="PHP"
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1280px-PHP-logo.svg.png"
        />
    );
};

export const HTMLCSSTech = () => {
    return (
        <Technology
            name="HTML/CSS"
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1280px-HTML5_logo_and_wordmark.svg.png"
        />
    );
};

export const DiscordTech = () => {
    return (
        <Technology
            name="Discord.js"
            img="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
        />
    );
};

export const MongoDBTech = () => {
    return (
        <Technology
            name="MongoDB"
            img="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png"
        />
    );
};

export const DockerTech = () => {
    return (
        <Technology
            name="Docker"
            img="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png"
        />
    );
};
