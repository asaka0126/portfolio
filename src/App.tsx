import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Portfolio } from './components/Portfolio';
import { ProjectDetails } from './components/ProjectDetails';
// import { PasswordProtection } from './components/PasswordProtection';
import { projects } from './data';

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Set to true by default to bypass password

  // if (!isAuthenticated) {
  //   return <PasswordProtection onCorrectPassword={() => setIsAuthenticated(true)} />;
  // }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project/:id" element={<ProjectDetails projects={projects} />} />
      </Routes>
    </Router>
  );
}

export default App;
