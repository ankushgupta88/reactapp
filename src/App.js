// eslint-disable-next-line 
import logo from './logo.svg';
import React from 'react';
import './App.css';
import './Style.css';
// import { Button, Col, Nav, Row, Tab, Container, Image, Modal } from 'react-bootstrap';
import About from './Pages/About';
import Resume from './Pages/Resume';
import Portfolio from './Pages/Portfolio';
import DesktopSidebar from './Pages/DesktopSidebar';
import MobileHeader from './Pages/MobileHeader';
import {Routes, Route } from "react-router-dom";
import Error404 from './Pages/Error404';
import Contact from './Pages/Contact';

function App() {

  return (
    <div className="App">
       <div className='site_header'>
            <DesktopSidebar />
      </div>
       <div className='MobileMenus'>
            <MobileHeader />
       </div>
      <Routes>
          <Route path="/" element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}


export default App;
