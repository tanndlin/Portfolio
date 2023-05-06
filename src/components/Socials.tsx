import React from 'react';
import SocialLink from './SocialLink';
import githubLogo from '../img/github.png';
import twitterLogo from '../img/twitter.png';
import linkedinLogo from '../img/linkedin.png';

const Socials = () => {
    return (
        <ul
            id="socialsContainer"
            className="fixed flex flex-col justify-center gap-4 bottom-16 ml-10"
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
                    link={'https://twitter.com/Tanner_Sandlin'}
                    logo={twitterLogo}
                    alt={'Twitter Logo'}
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
