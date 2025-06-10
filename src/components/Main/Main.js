import React, { useEffect, useRef } from 'react';
import './Main.css';
import imageGrey from '../../assets/daste-atlas-grey.jpg';
import imageOrange from '../../assets/daste-atlas-orange.jpg';
import imageWhite from '../../assets/daste-atlas-white.jpg';
import { motion } from 'framer-motion';

const Main = ({ theme, changeTheme }) => {
  const mainRef = useRef(null);

  useEffect(() => {
    if (!mainRef.current) return;
    const elements = mainRef.current.querySelectorAll('.section, img, .main-button');
    elements.forEach((el, i) => {
      el.style.opacity = 0;
      el.style.transform = 'translateY(40px)';
      setTimeout(() => {
        el.style.transition = 'opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)';
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }, 400 + i * 200);
    });
  }, [theme]);

  const getImageSrc = (theme) => {
    switch (theme) {
      case 'orange':
        return imageOrange;
      case 'white':
        return imageWhite;
      case 'grey':
      default:
        return imageGrey;
    }
  };

  return (
    <motion.main
      className={`main ${theme}`}
      ref={mainRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className='sections'>
        <section className="section image">
          <img src={getImageSrc(theme)} href={'/tour'} alt="daste. band" id="band-image" />
          <div className="main-button">
            {/* <a href={'/tour'} target="_blank" rel="noopener noreferrer" className="main-link">
              Atlas Tour
            </a> */}
          </div>
        </section>
      </div>
    </motion.main>
  );
}

export default Main;
