import React from 'react';
import './Footer.css';
import ThemeSelector from './ThemeSelector';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = ({ changeTheme, sticky }) => {
  return (
    <footer className={`footer ${sticky ? 'sticky-footer' : ''}`}>
      <div>
        <div className="row justify-content-center">
          <div className="col-12 d-flex flex-wrap justify-content-center">
            <ul className="social-links list-inline text-center">
              <li className="list-inline-item col-2 col-sm-1">
                <a href="https://open.spotify.com/artist/5uXWOfu1kA8mQ9bUp5GgxT" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-spotify"></i>
                </a>
              </li>
              <li className="list-inline-item col-2 col-sm-1">
                <a href="https://instagram.com/daste.music" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="list-inline-item col-2 col-sm-1">
                <a href="https://tiktok.com/@daste.music" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-tiktok"></i>
                </a>
              </li>
              <li className="list-inline-item col-2 col-sm-1">
                <a href="https://www.facebook.com/daste.music" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item col-2 col-sm-1">
                <a href="https://x.com/dasteband" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item col-2 col-sm-1">
                <a href="https://www.youtube.com/channel/UCOvwkCtPWz9rDC4rcNf303w" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-youtube"></i>
                </a>
              </li>
              <li className="list-inline-item col-2 col-sm-1">
                <a href="https://soundcloud.com/daste-music" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-soundcloud"></i>
                </a>
              </li>
              <li className="list-inline-item col-2 col-sm-1">
                <a href="https://daste.bandcamp.com/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-bandcamp"></i>
                </a>
              </li>
              <li className="list-inline-item col-2 col-sm-1">
                <a href="mailto:info@mammalsounds.com">
                  <i className="fas fa-envelope"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="theme-selector-container">
          <ThemeSelector changeTheme={changeTheme} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
