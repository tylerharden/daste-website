import React from 'react';
import './Main.css';
import Tour from './Tour';
import Music from './Music';
import './Main.css';
import imageGrey from '../assets/daste-atlas-image-grey.png';
import imageOrange from '../assets/daste-atlas-image-orange.png';
import imageWhite from '../assets/daste-atlas-image-white.png';

const Main = ({ theme, changeTheme }) => {
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
    <main className={`main ${theme}`}>
      <section className="section">
        <img src={getImageSrc(theme)} alt="daste. band" id="band-image" />
      </section>
      <section className="section">
        <Tour theme={theme} changeTheme={changeTheme} />
      </section>
      <section className="section">
        <Music theme={theme} changeTheme={changeTheme} />
      </section>
    </main>
  );
}

export default Main;