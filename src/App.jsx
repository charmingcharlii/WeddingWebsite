import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import OurStory from './components/OurStory';
import Location from './components/Location';
import Registry from './components/Registry';
import BridalParty from './components/BridalParty';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';

function App() {
  return (
   <>
    <div className='ui attached pusher navBarZ' style= {{height: '100vh'}}>
    <NavBar />
    <Home />
    <OurStory />
    <Location />
    <Registry />
    <BridalParty />
    <Gallery />
    <RSVP />
    </div>
   </>
  );
}

export default App;
