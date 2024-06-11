import React from 'react';
import './Main.css';
import imageGrey from '../../assets/daste-atlas-image-grey.png';
import imageOrange from '../../assets/daste-atlas-image-orange.png';
import imageWhite from '../../assets/daste-atlas-image-white.png';
// import News from '../News/News';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Main = ({ theme, changeTheme }) => {
  // const { width } = useWindowDimensions();

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
      <div className='sections'>
        {/* {width <= 550 ? ( */}
          {/* <section className="section image">
            <News />
          </section> */}
        {/* ) : ( */}
          <section className="section image">
            <img src={getImageSrc(theme)} href={'/tour'} alt="daste. band" id="band-image" />
            <div className="main-button">
              <a href={'/tour'} target="_blank" rel="noopener noreferrer" className="main-link">
                Atlas Tour
              </a>
            </div>
          </section>
        {/* )} */}
      </div>
    </main>
  );
}

export default Main;
