import './App.css';
import React from 'react';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { FirstSection } from './components/FirstSection';
import { SecondSection } from './components/SecondSection';
import { ThirdSection } from './components/ThirdSection';
import { FourthSection } from './components/FourthSection';
import { FifthSection } from './components/FifthSection';
import { SixthSection } from './components/SixthSection';

function App() {
  return (
    <React.Fragment>
      <ResponsiveAppBar />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
    </React.Fragment>
  );
}

export default App;
