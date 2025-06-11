import React, { useRef } from 'react';
import './Main.css';
import imageGrey from '../../assets/daste-atlas-grey.jpg';
import imageOrange from '../../assets/daste-atlas-orange.jpg';
import imageWhite from '../../assets/daste-atlas-white.jpg';

const Main = ({ theme, changeTheme }) => {
  const mainRef = useRef(null);

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
    <main
      className={`main ${theme}`}
      ref={mainRef}
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
    </main>
  );
}

export default Main;
