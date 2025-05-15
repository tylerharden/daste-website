// AppContent.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
import News from './components/News/News';
import Main from './components/Main/Main';
import Tour from './components/Tour/Tour';
import Music from './components/Music/Music';
import Contact from './components/Contact/Contact';
import Redirect from './components/Redirect/Redirect';



function AppContent({ theme, changeTheme }) {

  return (
    <div className={`App ${theme}-theme`}>
          <Routes>
            <Route path="/" element={<Main theme={theme} changeTheme={changeTheme} />} />
            <Route path="/news" element={<News theme={theme} changeTheme={changeTheme} />} /> 
            <Route path="/tour" element={<Tour theme={theme} changeTheme={changeTheme} />} />
            <Route path="/music" element={<Music theme={theme} changeTheme={changeTheme} />} />
            <Route path="/contact" element={<Contact theme={theme} changeTheme={changeTheme} />} />
            <Route path="/redirect" element={<Redirect />} />
          </Routes>
    </div>
  );
}

export default AppContent;
