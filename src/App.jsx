import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import OurStory from './components/OurStory';
import Location from './components/Location';
import Registry from './components/Registry';
import BridalParty from './components/BridalParty';
import Gallery from './components/Gallery';

function App() {
  return (
   <>
    <NavBar />
    <Home />
    <OurStory />
    <Location />
    <Registry />
    <BridalParty />
    <Gallery />
   </>
  );
}

export default App;
