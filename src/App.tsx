import React from 'react';
import HomePage from './pages/home/HomePage';
import Header from './components/Header';
import ProjectsPage from './pages/projects/ProjectsPage';
import ExperiencePage from './pages/experience/ExperiencePage';
import Container from './components/Container';

import './App.scss';
import Socials from './components/Socials';
import Tracker from './components/Tracker';

function App() {
    const [lastScroll, setLastScroll] = React.useState(0);
    let debounce = false;

    const [header, setHeader] = React.useState<HTMLElement | null>(null);
    const [descriptions, setDescriptions] =
        React.useState<NodeListOf<HTMLDivElement> | null>(null);

    const [scrollHeight, setScrollHeight] = React.useState(0);

    React.useEffect(() => {
        setHeader(document.querySelector<HTMLElement>('.header')!);
        setDescriptions(document.querySelectorAll('.description'));
        console.log('here');
    }, []);

    const onScroll = () => {
        setScrollHeight(window.scrollY);

        if (!debounce && header) {
            debounce = true;

            // Check if scrolled down
            if (window.scrollY > lastScroll) {
                header!.classList.add('hide');
            }

            // Check if scrolled up
            if (window.scrollY < lastScroll) {
                header!.classList.remove('hide');
            }

            setLastScroll(window.scrollY);
            setTimeout(() => {
                debounce = false;
            }, 300);
        }

        if (!descriptions) return;

        // Animate project descriptions
        descriptions!.forEach((description) => {
            const rect = description.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                description.classList.add('description-show');
            } else {
                description.classList.remove('description-show');
            }
        });
    };

    window.addEventListener('scroll', onScroll);

    return (
        <>
            <Header />
            <div className="bg"></div>
            <Tracker scrollHeight={scrollHeight} />
            <Socials />
            <Container>
                <HomePage />
                <ProjectsPage />
                <ExperiencePage />
            </Container>
        </>
    );
}

export default App;
