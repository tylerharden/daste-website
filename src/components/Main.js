import React from 'react';
import './Main.css';
import imageGrey from '../assets/daste-atlas-image-grey.png';
import imageOrange from '../assets/daste-atlas-image-orange.png';
import imageWhite from '../assets/daste-atlas-image-white.png';

const Main = ({ theme }) => {
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
      <img src={getImageSrc(theme)} alt="daste. band performing" id="band-image" />
    </main>
  );
}

export default Main;