import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import type { ChangeTheme, ThemeName } from './types/theme';
import AppContent from './AppContent';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';

import imageGrey from './assets/daste-atlas-grey.jpg';
import imageOrange from './assets/daste-atlas-orange.jpg';
import imageWhite from './assets/daste-atlas-white.jpg';

const DEFAULT_THEME: ThemeName = 'white';

const THEME_MAP: Record<ThemeName, { bg: string; link: string }> = {
  orange: { bg: '#f05222', link: 'white' },
  white: { bg: '#dcddde', link: '#f05222' },
  gray: { bg: '#afb8b6', link: 'black' },
  blue: { bg: '#e3e4e5', link: '#3852a5' },
};

function isThemeName(value: string | null): value is ThemeName {
  return value === 'orange' || value === 'white' || value === 'gray' || value === 'blue';
}

function applyThemeToDom(theme: ThemeName) {
  const { bg: bgColor, link: linkColor } = THEME_MAP[theme];

  document.documentElement.style.setProperty('--background-color', bgColor);
  document.documentElement.style.setProperty('--link-color', linkColor);

  document.documentElement.classList.remove(
    'orange-theme',
    'white-theme',
    'gray-theme',
    'blue-theme',
  );
  document.documentElement.classList.add(`${theme}-theme`);

  document.body.classList.remove('orange-theme', 'white-theme', 'gray-theme', 'blue-theme');
  document.body.classList.add(`${theme}-theme`);

  let themeColorMetaTag = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (!themeColorMetaTag) {
    themeColorMetaTag = document.createElement('meta');
    themeColorMetaTag.name = 'theme-color';
    document.head.appendChild(themeColorMetaTag);
  }
  themeColorMetaTag.setAttribute('content', bgColor);
}

function AppWrapper() {
  const [theme, setTheme] = useState<ThemeName>(() => {
    const storedTheme = localStorage.getItem('theme');
    return isThemeName(storedTheme) ? storedTheme : DEFAULT_THEME;
  });

  const headerRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  const changeTheme: ChangeTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const preloadImages = (imageUrls: string[]) => {
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    };

    preloadImages([imageGrey, imageOrange, imageWhite]);

    const updateHeaderHeight = () => {
      const headerHeight = headerRef.current?.offsetHeight ?? 60;
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

  // Apply theme before paint to prevent a flash of default styles.
  useLayoutEffect(() => {
    applyThemeToDom(theme);
  }, [theme]);

  useEffect(() => {
    function updateFooterPadding() {
      if (footerRef.current) {
        document.documentElement.style.setProperty(
          '--footer-height',
          `${footerRef.current.offsetHeight}px`,
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
        <Header theme={theme} changeTheme={changeTheme} ref={headerRef} />
        <div className="container">
          <main className="main-content">
            <AppContent theme={theme} changeTheme={changeTheme} />
          </main>
        </div>
        <Footer changeTheme={changeTheme} sticky ref={footerRef} />
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
