import React from 'react';
import HomePage from './pages/home/HomePage';
import Header from './components/Header';
import ProjectsPage from './pages/projects/ProjectsPage';
import SocialLink from './components/SocialLink';
import ExperiencePage from './pages/experience/ExperiencePage';
import Container from './components/Container';
import githubLogo from './img/github.png';
import twitterLogo from './img/twitter.png';
import linkedinLogo from './img/linkedin.png';

import './App.scss';

function App() {
    const [lastScroll, setLastScroll] = React.useState(0);
    let debounce = false;

    const onScroll = () => {
        if (debounce) return;
        debounce = true;
        const header = document.querySelector('.header')!;

        // Check if scrolled down
        if (window.scrollY > lastScroll) {
            header.classList.add('hide');
        }

        // Check if scrolled up
        if (window.scrollY < lastScroll) {
            header.classList.remove('hide');
        }

        setLastScroll(window.scrollY);
        setTimeout(() => {
            debounce = false;
        }, 300);
    };

    window.addEventListener('scroll', onScroll);

    return (
        <>
            <Header />
            <div className="bg"></div>
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
            <Container>
                <HomePage />
                <ProjectsPage />
                <ExperiencePage />
            </Container>
        </>
    );
}

export default App;
