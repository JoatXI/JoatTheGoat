import React, { useEffect } from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    fetch("/")
    .then((res) => res.json())
    .then((data) => { console.log(data)})
  }, [])

  return (
    <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;