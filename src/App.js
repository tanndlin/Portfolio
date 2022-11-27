import React from 'react';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import ProjectsPage from './pages/ProjectsPage';
import SocialLink from './components/SocialLink';
import ExperiencePage from './pages/ExperiencePage';
import Container from './components/Container';
import githubLogo from './img/github.png';
import twitterLogo from './img/twitter.png';
import linkedinLogo from './img/linkedin.png';

import './App.css';


function App() {
  return (
    <>
      <Header />
      <div className='bg'></div>
      <li className='fixed flex flex-col justify-center gap-4 bottom-16'>
        <SocialLink link={'https://github.com/tanndlin'} logo={githubLogo} alt={'Github Logo'} />
        <SocialLink link={'https://twitter.com/Tanner_Sandlin'} logo={twitterLogo} alt={'Twitter Logo'} />
        <SocialLink className='w-10' link={'https://www.linkedin.com/in/tanner-sandlin/'} logo={linkedinLogo} alt={'LinkedIn Logo'} />
      </li>
      <Container>
        <HomePage />
        <ProjectsPage />
        <ExperiencePage />
      </Container>
    </>
  );
}

export default App;
