import React from 'react';
import './App.css';
import SectionEight from './Components/SectionEight/SectionEight';
import SectionOne from './Components/SectionOne/SectionOne';
import SectionSeven from './Components/SectionSeven/SectionSeven';
import SectionThree from './Components/SectionThree/SectionThree';
import SectionTwo from './Components/SectionTwo/SectionTwo';
import Footer from './Components/Footer/Footer'
import SectionFour from './Components/SectionFour/SectionFour';
import SectionFive from './Components/SectionFive/SectionFive';
import SectionSix from './Components/SectionSix/SectionSix';


function App() {
  return (
    <div className="App">
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <SectionSeven/>
      <SectionEight/>
      <Footer/>
    </div>
  );
}

export default App;
