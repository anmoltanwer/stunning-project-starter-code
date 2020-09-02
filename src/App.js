import React from 'react';
import classes from "./App.module.css"
import TopBar from './TopBar/TopBar';
import LandingSection from './LandingSection/LandingSection';

function App() {
  return (
    <div className={classes.App}>
      <TopBar />
      <LandingSection />
    </div>
  );
}

export default App;
