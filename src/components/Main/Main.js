import React from 'react';
import './Main.css';
import Tour from '../Tour/Tour';
import Music from '../Music/Music';
// import Bandsintown from './Bandsintown';
import './Main.css';
import imageGrey from '../../assets/daste-atlas-image-grey.png';
import imageOrange from '../../assets/daste-atlas-image-orange.png';
import imageWhite from '../../assets/daste-atlas-image-white.png';
import News from '../News/News';

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
      <div className='sections'>
        {/* <section className="section image">
          <img src={getImageSrc(theme)} alt="daste. band" id="band-image" />
        </section> */}
        <section className="section">
          <News theme={theme} changeTheme={changeTheme} />
        </section>

        {/* <Bandsintown /> */}
        <section className="section">
          {/* <h1>Tour</h1> */}
          <Tour theme={theme} changeTheme={changeTheme} />
        </section>
        <section className="section">
          <Music theme={theme} changeTheme={changeTheme} />
        </section>
      </div>
    </main>
  );
}

export default Main;