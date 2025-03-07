import React from 'react';
import githubLogo from '../img/github.png';
import linkedinLogo from '../img/linkedin.png';
import SocialLink from './SocialLink';

const Socials = () => {
    return (
        <ul
            id="socialsContainer"
            className="fixed flex flex-col justify-center gap-4 ml-10 bottom-16"
        >
            <li>
                <SocialLink
                    link={'https://github.com/tanndlin'}
                    logo={githubLogo}
                    alt={'Github Logo'}
                />
            </li>
            <li>
                <SocialLink
                    className="w-10"
                    link={'https://www.linkedin.com/in/tanner-sandlin/'}
                    logo={linkedinLogo}
                    alt={'LinkedIn Logo'}
                />
            </li>
        </ul>
    );
};

export default Socials;
