import React, { useState, useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Tour from './components/Tour';
import Music from './components/Music';
import Contact from './components/Contact';

function AppContent({ theme, changeTheme }) {

  return (
    <div className={`App ${theme}-theme`}>
          <Routes>
            <Route path="/" element={<Main theme={theme} changeTheme={changeTheme} />} />
            <Route path="/tour" element={<Tour theme={theme} changeTheme={changeTheme} />} />
            <Route path="/music" element={<Music theme={theme} changeTheme={changeTheme} />} />
            <Route path="/contact" element={<Contact theme={theme} changeTheme={changeTheme} />} />
          </Routes>
    </div>
  );
}

export default AppContent;
