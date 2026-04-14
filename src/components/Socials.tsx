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
                    logo={'/github.png'}
                    alt={'Github Logo'}
                />
            </li>
            <li>
                <SocialLink
                    className="w-10"
                    link={'https://www.linkedin.com/in/tanner-sandlin/'}
                    logo={'/linkedin.png'}
                    alt={'LinkedIn Logo'}
                />
            </li>
            <li>
                <SocialLink
                    className="w-10"
                    link={'https://www.instagram.com/tanndlin'}
                    logo={'/Instagram.png'}
                    alt={'Instagram Logo'}
                />
            </li>
        </ul>
    );
};

export default Socials;
