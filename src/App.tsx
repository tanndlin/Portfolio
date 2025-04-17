import React from 'react';
import Container from './components/Container';
import Header from './components/Header';
import ExperiencePage from './pages/experience/ExperiencePage';
import HomePage from './pages/home/HomePage';
import ProjectsPage from './pages/projects/ProjectsPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Socials from './components/Socials';

function App() {
    React.useState<NodeListOf<HTMLDivElement> | null>(null);

    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/experience" element={<ExperiencePage />} />
                </Routes>
            </Container>
            <Socials />
        </BrowserRouter>
    );
}

export default App;
