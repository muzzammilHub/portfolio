import React from 'react';
import Topbar from './components/Topbar';
import Intro from './components/Intro'
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact'
import Education from './components/Education';

function App(props) {
 
  return (
    <div>
      <Topbar/>
        <Intro/>
        <About/>
        <Skills/>
        <Projects/>
        <Education/>
        <Contact/>
      </div>
  );
}

export default App;