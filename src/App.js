// App.js
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContent from './AppContent';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';

import imageGrey from './assets/daste-atlas-grey.jpg';
import imageOrange from './assets/daste-atlas-orange.jpg';
import imageWhite from './assets/daste-atlas-white.jpg';

function AppWrapper() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'white');
  const headerRef = useRef(null);
  const footerRef = useRef(null); 

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    const themeMap = {
      orange: { bg: '#f05222', link: 'white' },
      white:  { bg: '#dcddde', link: '#f05222' },
      gray:   { bg: '#afb8b6', link: 'black' },
      // blue:   { bg: '#e3e4e5', link: '#3852a5' }, 
    };

    const fallback = { bg: '#afb8b6', link: 'black' };
    const { bg: bgColor, link: linkColor } = themeMap[newTheme] || fallback;

    document.documentElement.style.setProperty('--background-color', bgColor);
    document.documentElement.style.setProperty('--link-color', linkColor);

    document.body.classList.remove('orange-theme', 'white-theme', 'gray-theme', 'blue-theme');
    document.body.classList.add(`${newTheme}-theme`);

    let themeColorMetaTag = document.querySelector('meta[name="theme-color"]');
    if (!themeColorMetaTag) {
      themeColorMetaTag = document.createElement('meta');
      themeColorMetaTag.name = 'theme-color';
      document.head.appendChild(themeColorMetaTag);
    }
    themeColorMetaTag.setAttribute('content', bgColor);
  };

  useEffect(() => {
    const preloadImages = (imageUrls) => {
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    };

    preloadImages([imageGrey, imageOrange, imageWhite]);

    const updateHeaderHeight = () => {
      const headerHeight = headerRef.current ? headerRef.current.offsetHeight : 60;
      document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
      document.documentElement.style.setProperty('--main-padding-top', `${headerHeight}px`);
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 200; 
      const blurValue = Math.min(scrollTop / maxScroll, 1) * 10; 

      if (headerRef.current) {
        headerRef.current.style.backdropFilter = `blur(${blurValue}px)`;
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    window.addEventListener('scroll', handleScroll);

    const timer = setTimeout(() => {
      updateHeaderHeight();
    }, 500);

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    changeTheme(theme); 
  }, [theme]);

  useEffect(() => {
    function updateFooterPadding() {
      if (footerRef.current) {
        document.documentElement.style.setProperty(
          '--footer-height',
          `${footerRef.current.offsetHeight}px`
        );
      }
    }
    updateFooterPadding();
    window.addEventListener('resize', updateFooterPadding);
    return () => window.removeEventListener('resize', updateFooterPadding);
  }, [theme]); 

  return (
    <div className="App">
      <div className="content-wrapper">
        <Header theme={theme} ref={headerRef} />
        <div className="container">
          <main className="main-content">
            <AppContent theme={theme} changeTheme={changeTheme} />
          </main>
        </div>
        <Footer changeTheme={changeTheme} sticky={true} ref={footerRef} />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
