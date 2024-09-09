// Projects.js
import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  // Dummy project list
  const projectList = [
    { id: 1, name: 'Project One' },
    { id: 2, name: 'Project Two' },
    { id: 3, name: 'Project Three' }
  ];

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projectList.map((project) => (
          <li key={project.id}>
            <Link to={`/projects/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
