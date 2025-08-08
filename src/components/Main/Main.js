import React, { useRef } from 'react';
import './Main.css';
import imageGrey from '../../assets/daste-atlas-grey.jpg';
import imageOrange from '../../assets/daste-atlas-orange.jpg';
import imageWhite from '../../assets/daste-atlas-white.jpg';
import imageBlue from '../../assets/dasteWORLD_Press_5305_halftone Large.jpeg';
import { motion } from 'framer-motion';

const Main = ({ theme, changeTheme }) => {
  const mainRef = useRef(null);

  const getImageSrc = (theme) => {
    switch (theme) {
      case 'blue':
        return imageBlue;
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
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <div className='sections'>
        <section className="section image">
          <motion.img
            src={getImageSrc(theme)}
            href={'/tour'}
            alt="daste. band"
            id="band-image"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          />
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
