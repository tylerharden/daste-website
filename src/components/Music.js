import React from 'react';
import './Music.css';

const Music = ({ theme, changeTheme }) => {
  return (
    <main className="music">
      <h1>Music Releases</h1>
      <section>
        <h2>Around (Single)</h2>
        <iframe src="https://open.spotify.com/embed/album/5sfmsDl4lB1lZdX2gxIK3q?si=LiNlxqvrQMSXzbRtBbTRqg" width="300" height="380" frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        <img src="assets/around.jpg" alt="Around Single" className="release-photo" />
      </section>
      <section>
        <h2>Butterfly (Single)</h2>
        <iframe src="https://open.spotify.com/embed/album/5Q38YvTGu832sX1ZDKK2sO?si=_1WIx-6cSvu540d5yMjwwQ" width="300" height="380" frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        <img src="assets/butterfly.jpg" alt="Butterfly Single" className="release-photo" />
      </section>
      <section>
        <h2>Dusk & Dawn (Album)</h2>
        <iframe src="https://open.spotify.com/embed/album/77bVy7O8N5R9vSDhcXWPFb?si=2qzmvx_KQhawv_f1GfFThw" width="300" height="380" frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        <img src="assets/dusk_dawn.jpg" alt="Dusk & Dawn Album" className="release-photo" />
      </section>
      <section>
        <h2>Same As It Ever Was (EP)</h2>
        <iframe src="https://open.spotify.com/embed/album/5UwvFKxjw0hwptJ5HyOWNb?si=u-xgaqHwRKyIBpSrCHCcJQ" width="300" height="380" frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        <img src="assets/same_as_it_ever_was.jpg" alt="Same As It Ever Was EP" className="release-photo" />
      </section>
      <section>
        <h2>Palette (EP)</h2>
        <iframe src="https://open.spotify.com/embed/album/5vAb08N0DcBLIX2QopJbOa?si=IiM576EUS9O_SpusG9BUwA" width="300" height="380" frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        <img src="assets/palette.jpg" alt="Palette EP" className="release-photo" />
      </section>
    </main>
  );
}

export default Music;
