// App.js
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContent from './AppContent';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

import imageGrey from './assets/daste-atlas-grey.jpg';
import imageOrange from './assets/daste-atlas-orange.jpg';
import imageWhite from './assets/daste-atlas-white.jpg';

function AppWrapper() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'white');
  const headerRef = useRef(null);
  // const location = useLocation();

  const changeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    const bgColor = newTheme === 'orange' ? '#f05222' : newTheme === 'white' ? '#dcddde' : '#afb8b6';
    const linkColor = newTheme === 'orange' ? 'white' : newTheme === 'white' ? '#f05222' : 'black';

    document.documentElement.style.setProperty('--background-color', bgColor);
    document.documentElement.style.setProperty('--link-color', linkColor);
    document.body.classList.remove('orange-theme', 'white-theme', 'gray-theme');
    document.body.classList.add(`${newTheme}-theme`);

    // Update the theme-color meta tag
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
      const maxScroll = 200; // Adjust this value based on when you want the effect to fully apply
      const blurValue = Math.min(scrollTop / maxScroll, 1) * 10; // Up to 10px blur

      if (headerRef.current) {
        headerRef.current.style.backdropFilter = `blur(${blurValue}px)`;
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    window.addEventListener('scroll', handleScroll);

    // Force a re-render after 0.5 seconds
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
    changeTheme(theme); // Ensure the theme is applied on initial load
  }, [theme]);
  const footerRef = useRef(null);

  useEffect(() => {
      function updatePadding() {
        console.log('Updating padding');
        if (footerRef.current) {
          document.documentElement.style.setProperty(
            '--footer-height',
            `${footerRef.current.offsetHeight}px`
          );
        }
      }
      updatePadding();
      window.addEventListener('resize', updatePadding);
    return () => window.removeEventListener('resize', updatePadding);
  }, []);      

  return (
    <div className="App">
      <div className="content-wrapper">
        <Header theme={theme} ref={headerRef} />
        <div className="container" style={{ paddingBottom: 'var(--footer-height)' }}>
          <main className="main-content">
            <AppContent theme={theme} changeTheme={changeTheme} />
          </main>
        </div>
        <Footer changeTheme={changeTheme} sticky='true' />
        {/* <Footer changeTheme={changeTheme} sticky={location.pathname === '/'} /> */}
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
