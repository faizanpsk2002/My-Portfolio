import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path='/Skills' element={<Skills/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
