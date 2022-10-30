import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import ProjectsPage from './pages/ProjectsPage';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/projects" element={<ProjectsPage />} />
          <Route path="/Contact-Manager/src/index.html" />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
