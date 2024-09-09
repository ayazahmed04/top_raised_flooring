// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Projects from './projects';
import ProjectDetails from './ProjectDetails';

const AppProject = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/projects">Projects</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default AppProject;
