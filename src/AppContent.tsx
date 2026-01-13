import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import type { ChangeTheme, ThemeName } from './types/theme';
import './App.css';
import Main from './pages/Main/Main';
import Tour from './pages/Tour/Tour';
import Music from './pages/Music/Music';
import NotFound from './pages/NotFound/NotFound';
import Contact from './pages/Contact/Contact';
import Redirect from './components/redirect/Redirect';
import PageFade from './components/animations/PageFade';

type AppContentProps = {
  theme: ThemeName;
  changeTheme: ChangeTheme;
};

function AppContent({ theme, changeTheme }: AppContentProps) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<NotFound />} />
        <Route
          path="/"
          element={
            <PageFade keyProp="main">
              <Main theme={theme} changeTheme={changeTheme} />
            </PageFade>
          }
        />
        <Route
          path="/tour"
          element={
            <PageFade keyProp="tour">
              <Tour theme={theme} changeTheme={changeTheme} />
            </PageFade>
          }
        />
        <Route
          path="/music"
          element={
            <PageFade keyProp="music">
              <Music theme={theme} changeTheme={changeTheme} />
            </PageFade>
          }
        />
        <Route
          path="/contact"
          element={
            <PageFade keyProp="contact">
              <Contact theme={theme} changeTheme={changeTheme} />
            </PageFade>
          }
        />
        <Route
          path="/redirect"
          element={
            <PageFade keyProp="redirect">
              <Redirect />
            </PageFade>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default AppContent;
