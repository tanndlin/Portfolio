import githubLogo from '../img/github.png';
import instagramLogo from '../img/Instagram.png';
import linkedinLogo from '../img/linkedin.png';
import SocialLink from './SocialLink';

const Socials = () => {
    return (
        <ul
            id="socialsContainer"
            className="flex gap-4 ml-10 lg:flex-col lg:sticky lg:bottom-16 max-md:mb-8"
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
            <li>
                <SocialLink
                    className="w-10"
                    link={'https://www.instagram.com/tanndlin'}
                    logo={instagramLogo}
                    alt={'Instagram Logo'}
                />
            </li>
        </ul>
    );
};

export default Socials;
