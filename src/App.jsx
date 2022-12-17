
import './index.css';
import { useTranslation } from "react-i18next";
import Navbars from './components/Navbars';
import Home from './components/Home'
 import Applications from './components/Applications'
import Legislation from './components/Legislation'
// import CaseStudies from './components/CaseStudies'
import Partners from './components/Partners'
import React from 'react';
import Footer from './components/Footer';


function App() {
  const { t, i18n } = useTranslation();

  
  return (


    <div className="App">
      <Navbars />
      <Home/>
      <Applications/>
       <Legislation/>
      {/* <CaseStudies/> */}
      <Partners/> 
     <Footer/>
    </div>
  );
}

export default App;
