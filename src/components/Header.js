import React, { forwardRef } from 'react';
import './Header.css';
// import logo from '../assets/daste.-LogoBlack.png';
// import ThemeSelector from './ThemeSelector';

import dasteLogoOffWhite from '../assets/daste.-LogoOffWhite.png';
// import dasteLogoWhite from '../assets/daste.-LogoWhite.png';
import dasteLogoBlack from '../assets/daste.-LogoBlack.png';
import dasteLogoOrange from '../assets/daste.-LogoOrange.png';

const Header = forwardRef(({ theme, changeTheme }, ref) => {
  const getLogo = () => {
    switch (theme) {
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
    <header className="header" ref={ref}>
      <div >
        <div className="header-container row align-items-center">
          <div className="col-12 col-sm-3 d-flex justify-content-center justify-content-sm-start">
            <a className="navbar-brand" href="/">
              <img src={getLogo()} alt="daste. band logo" id="logo-image" className="logo-overlay img-fluid" />

            </a>
          </div>
          <div className="col-12 col-md-6 col-sm-3 d-none d-sm-flex justify-content-center">
          </div>
          <div className="col-12 col-md-3 col-sm-6 d-none d-sm-flex justify-content-end">
            <nav>
              <ul className="navbar-nav flex-row">
                <li className="nav-item"><a className="nav-link" href="https://daste-store.myshopify.com" target="_blank" rel="noopener noreferrer">STORE</a></li>
                <li className="nav-item"><a className="nav-link" href="/tour">TOUR</a></li>
                <li className="nav-item"><a className="nav-link" href="/music">MUSIC</a></li>
                <li className="nav-item"><a className="nav-link" href="/contact">CONTACT</a></li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="row d-sm-none justify-content-center mt-3">
          <div className="col-12 d-flex justify-content-center mt-2">
          </div>
          <div className="col-12 d-flex justify-content-center mt-2">
            <nav>
              <ul className="navbar-nav flex-row">
                <li className="nav-item"><a className="nav-link" href="https://daste-store.myshopify.com" target="_blank" rel="noopener noreferrer">STORE</a></li>
                <li className="nav-item"><a className="nav-link" href="/tour">TOUR</a></li>
                <li className="nav-item"><a className="nav-link" href="/music">MUSIC</a></li>
                <li className="nav-item"><a className="nav-link" href="/contact">CONTACT</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
