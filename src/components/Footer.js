import React from 'react';
import { useLocation } from 'react-router-dom'; // <-- Add this
import './Footer.css';
import ThemeSelector from './ThemeSelector';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = ({ changeTheme, sticky }) => {
  const location = useLocation(); // <-- Get current path
  const isTourPage = location.pathname === '/tour';

  return (
    <footer className={`footer ${sticky ? 'sticky-footer' : ''}`}>
      <div>
        <div className="row justify-content-center">
          <div className="col-12 d-flex flex-column align-items-center text-center">

            {isTourPage ? (
              <p className="text-center" style={{ paddingTop: '10px', fontStyle: 'italic' }}>
                If you are having trouble with any ticket links, check out {' '}
                <a href="https://www.bandsintown.com/a/15465034-daste." target="_blank" rel="noopener noreferrer">
                  Bandsintown 
                </a>{' '}or{' '}
                <a href="https://www.songkick.com/artists/9910004-daste" target="_blank" rel="noopener noreferrer">
                  Songkick
                </a>{' '}
              </p>
            ) : (
              <>
                <ul className="social-links list-inline text-center">
                  <li className="list-inline-item col-2 col-sm-1 spotify">
                    <a href="https://open.spotify.com/artist/5uXWOfu1kA8mQ9bUp5GgxT" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-spotify"></i>
                    </a>
                  </li>
                  <li className="list-inline-item col-2 col-sm-1 instagram">
                    <a href="https://instagram.com/daste.music" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item col-2 col-sm-1 tiktok">
                    <a href="https://tiktok.com/@daste.music" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-tiktok"></i>
                    </a>
                  </li>
                  <li className="list-inline-item col-2 col-sm-1 facebook">
                    <a href="https://www.facebook.com/daste.music" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item col-2 col-sm-1 twitter">
                    <a href="https://x.com/dasteband" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item col-2 col-sm-1 youtube">
                    <a href="https://www.youtube.com/channel/UCOvwkCtPWz9rDC4rcNf303w" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li className="list-inline-item col-2 col-sm-1 soundcloud">
                    <a href="https://soundcloud.com/daste-music" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-soundcloud"></i>
                    </a>
                  </li>
                  <li className="list-inline-item col-2 col-sm-1 bandcamp">
                    <a href="https://daste.bandcamp.com/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-bandcamp"></i>
                    </a>
                  </li>
                  <li className="list-inline-item col-2 col-sm-1 email">
                    <a href="mailto:info@mammalsounds.com">
                      <i className="fas fa-envelope"></i>
                    </a>
                  </li>
                </ul>
                <div>
                  <h6 className="footer-text">The music is yours to keep.</h6>
                </div>
              </>
            )}
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