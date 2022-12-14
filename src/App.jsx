
import './index.css';
import Navbars from './components/Navbars';
import Home from './components/Home'
// import Applications from './components/Applications'
// import Legislation from './components/Legislation'
// import CaseStudies from './components/CaseStudies'
// import Parteners from './components/Parteners'
import React from 'react';
import Footer from './components/Footer';


function App() {

  
  return (


    <div className="App">
      <Navbars />
      <Home/>
      {/* <Applications/>
      <Legislation/>
      <CaseStudies/>
      <Parteners/> */}
     <Footer/>
    </div>
  );
}

export default App;
