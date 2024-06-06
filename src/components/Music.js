import React from 'react';
import './Music.css';
import { useLocation } from 'react-router-dom';

const Music = ({ theme, changeTheme }) => {
  const location = useLocation();
  return (
    <div>
      {/* {location.pathname === '/' && <h1>Music</h1>} */}
      <main className="music">
        <section>
          {/* <h2>Around (Single)</h2> */}
          <iframe 
            title="Around Single by daste." 
            src="https://open.spotify.com/embed/album/5sfmsDl4lB1lZdX2gxIK3q?si=LiNlxqvrQMSXzbRtBbTRqg" 
            width="100%" 
            height="380" 
            frameBorder="0" 
            allowTransparency="true" 
            allow="encrypted-media"
          ></iframe>
          {/* <img src="assets/around.jpg" alt="Around Single" className="release-photo" /> */}
        </section>
        <section>
          {/* <h2>Butterfly (Single)</h2> */}
          <iframe 
            title="Butterfly Single by daste." 
            src="https://open.spotify.com/embed/album/5Q38YvTGu832sX1ZDKK2sO?si=_1WIx-6cSvu540d5yMjwwQ" 
            width="100%" 
            height="380" 
            frameBorder="0" 
            allowTransparency="true" 
            allow="encrypted-media"
          ></iframe>
          {/* <img src="assets/butterfly.jpg" alt="Butterfly Single" className="release-photo" /> */}
        </section>
        <section>
          {/* <h2>Dusk & Dawn (Album)</h2> */}
          <iframe 
            title="Dusk & Dawn Album by daste." 
            src="https://open.spotify.com/embed/album/77bVy7O8N5R9vSDhcXWPFb?si=2qzmvx_KQhawv_f1GfFThw" 
            width="100%" 
            height="380" 
            frameBorder="0" 
            allowTransparency="true" 
            allow="encrypted-media"
          ></iframe>
          {/* <img src="dusk_dawn.jpg" alt="Dusk & Dawn Album" className="release-photo" /> */}
        </section>
        <section>
          {/* <h2>Same As It Ever Was (EP)</h2> */}
          <iframe 
            title="Same As It Ever Was EP by daste." 
            src="https://open.spotify.com/embed/album/5UwvFKxjw0hwptJ5HyOWNb?si=u-xgaqHwRKyIBpSrCHCcJQ" 
            width="100%" 
            height="380" 
            frameBorder="0" 
            allowTransparency="true" 
            allow="encrypted-media"
          ></iframe>
          {/* <img src="assets/same_as_it_ever_was.jpg" alt="Same As It Ever Was EP" className="release-photo" /> */}
        </section>
        <section>
          {/* <h2>Palette (EP)</h2> */}
          <iframe 
            title="Palette EP by daste." 
            src="https://open.spotify.com/embed/album/5vAb08N0DcBLIX2QopJbOa?si=IiM576EUS9O_SpusG9BUwA" 
            width="100%" 
            height="380" 
            frameBorder="0" 
            allowTransparency="true" 
            allow="encrypted-media"
          ></iframe>
          {/* <img src="assets/palette.jpg" alt="Palette EP" className="release-photo" /> */}
        </section>
      </main>
    </div>
  );
}

export default Music;
