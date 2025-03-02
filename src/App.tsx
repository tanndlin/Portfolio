import React from 'react';
import Container from './components/Container';
import Header from './components/Header';
import ExperiencePage from './pages/experience/ExperiencePage';
import HomePage from './pages/home/HomePage';
import ProjectsPage from './pages/projects/ProjectsPage';

import './App.scss';
import Socials from './components/Socials';
import Tracker from './components/Tracker';

function App() {
    React.useState<NodeListOf<HTMLDivElement> | null>(null);

    return (
        <>
            <Header />
            <div className="bg"></div>
            <Tracker />
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
