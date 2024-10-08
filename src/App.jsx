import React from 'react';
import Topbar from './components/Topbar';
import Intro from './components/Intro'
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact'
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';

function App(props) {
 
  return (
    <div>
      <Topbar/>
        <Intro/>
        <About/>
        <Skills/>
        <Projects/>
        <WorkExperience/>
        <Education/>
        <Contact/>
      </div>
  );
}

export default App;