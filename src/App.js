import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Ref } from './components/Ref';
import { Contact } from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className="App">
        <NavBar />
        <div className='content'>
          <Banner />
          <Skills />
          <Projects />
          <Ref />
          <Contact />
        </div>
    </div>
  );
}

export default App;