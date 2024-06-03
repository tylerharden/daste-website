import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Tour from './components/Tour';
import Music from './components/Music';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'gray');
  const headerRef = useRef(null);

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    const bgColor = newTheme === 'orange' ? '#f05222' : newTheme === 'white' ? '#dcddde' : '#afb8b6';
    document.documentElement.style.setProperty('--background-color', bgColor);
    document.documentElement.style.setProperty('--link-color', newTheme === 'orange' ? 'white' : newTheme === 'white' ? '#f05222' : 'black');
  };

  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 60;
      document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 200; // Adjust this value based on when you want the effect to fully apply
      const blurValue = Math.min(scrollTop / maxScroll, 1) * 10; // Up to 10px blur
      const opacityValue = Math.min(scrollTop / maxScroll, 1) * 0.8; // Up to 0.8 opacity

      if (headerRef.current) {
        headerRef.current.style.backdropFilter = `blur(${blurValue}px)`;
        // headerRef.current.style.backgroundColor = `rgba(255, 255, 255, ${opacityValue})`;
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    changeTheme(theme); // Ensure the theme is applied on initial load
  }, [theme]);

  return (
    <Router>
      <div className={`App ${theme}-theme`}>
        <div className="container">
          <Header ref={headerRef} theme={theme} changeTheme={changeTheme} />
          <Routes>
            <Route path="/" element={<Main theme={theme} changeTheme={changeTheme} />} />
            <Route path="/tour" element={<Tour theme={theme} changeTheme={changeTheme} />} />
            <Route path="/music" element={<Music theme={theme} changeTheme={changeTheme} />} />
            <Route path="/contact" element={<Contact theme={theme} changeTheme={changeTheme} />} />
            {/* Add other routes as needed */}
          </Routes>
          <Footer changeTheme={changeTheme} />
        </div>
      </div>
    </Router>
  );
}

export default App;
