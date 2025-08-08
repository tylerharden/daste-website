import React, { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import dasteLogoOffWhite from '../assets/daste.-LogoOffWhite.png';
import dasteLogoBlack from '../assets/daste.-LogoBlack.png';
import dasteLogoOrange from '../assets/daste.-LogoOrange.png';
import dasteLogoBlue from '../assets/daste.-LogoBlue.png';

const Header = forwardRef(({ theme, changeTheme }, ref) => {
  const getLogo = () => {
    switch (theme) {
      case 'blue':
        return dasteLogoBlue;
      case 'orange':
        return dasteLogoOffWhite;
      case 'white':
        return dasteLogoOrange;
      case 'gray':
      default:
        return dasteLogoBlack;
    }
  };

  return (
    <div className="header-container">
    <header className="header" ref={ref}>
        <div className="row align-items-center d-lg-none">
          <div className="col-12 col-sm-3 d-flex justify-content-center justify-content-sm-start">
            <Link className="navbar-brand" to="/">
              <img src={getLogo()} alt="daste. band logo" id="logo-image" className="logo-overlay img-fluid" />
            </Link>
          </div>
          <div className="col-12 col-md-6 col-sm-3 d-none d-sm-flex justify-content-center"></div>
          <div className="col-12 col-md-3 col-sm-6 d-none d-sm-flex justify-content-end">
            <nav>
              <ul className="navbar-nav flex-row">
                <li className="nav-item"><Link className="nav-link" to="/tour">TOUR</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/music">MUSIC</Link></li>
                <li className="nav-item"><a className="nav-link" href="https://daste-store.myshopify.com" target="_blank" rel="noopener noreferrer">STORE</a></li>
                <li className="nav-item"><Link className="nav-link" to="/contact">CONTACT</Link></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="row d-lg-flex d-none align-items-center justify-content-between">
          <div className="col-4">
            <nav>
              <ul className="navbar-nav flex-row">
                <li className="nav-item"><Link className="nav-link" to="/tour">TOUR</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/music">MUSIC</Link></li>
                <li className="nav-item"><a className="nav-link" href="https://daste-store.myshopify.com" target="_blank" rel="noopener noreferrer">STORE</a></li>
              </ul>
            </nav>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <Link className="navbar-brand" to="/">
              <img src={getLogo()} alt="daste. band logo" id="logo-image" className="logo-overlay img-fluid" />
            </Link>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <ul className="navbar-nav flex-row">
              <li className="nav-item"><a className="nav-link" href="https://open.spotify.com/artist/5uXWOfu1kA8mQ9bUp5GgxT" target="_blank" rel="noopener noreferrer"><i className="fab fa-spotify"></i></a></li>
              <li className="nav-item"><a className="nav-link" href="https://instagram.com/daste.music" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
              <li className="nav-item"><a className="nav-link" href="https://tiktok.com/@daste.music" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a></li>
              <li className="nav-item"><a className="nav-link" href="https://www.facebook.com/daste.music" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">CONTACT</Link></li>
            </ul>
          </div>
        </div>
        <div className="row d-sm-none justify-content-center mt-3">
          <div className="col-12 d-flex justify-content-center mt-2"></div>
          <div className="col-12 d-flex justify-content-center mt-2">
            <nav>
              <ul className="navbar-nav flex-row">
                <li className="nav-item"><Link className="nav-link" to="/tour">TOUR</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/music">MUSIC</Link></li>
                <li className="nav-item"><a className="nav-link" href="https://daste-store.myshopify.com" target="_blank" rel="noopener noreferrer">STORE</a></li>
                <li className="nav-item"><Link className="nav-link" to="/contact">CONTACT</Link></li>
              </ul>
            </nav>
          </div>
        </div>
    </header>
    </div>
  );
});

export default Header;
