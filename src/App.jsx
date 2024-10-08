import React, { useState, useEffect } from 'react';
import Topbar from './components/Topbar';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';

function App(props) {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      {/* Pass isDarkMode prop to Topbar */}
      <Topbar toggleDarkMode={() => setDarkMode(!darkMode)} isDarkMode={darkMode} />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <WorkExperience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
