import React from 'react';
import './ThemeSelector.css';

const ThemeSelector = ({ changeTheme }) => {
  return (
    <div className="theme-buttons">
      <button className="theme-button orange" onClick={() => changeTheme('orange')}></button>
      <button className="theme-button white" onClick={() => changeTheme('white')}></button>
      <button className="theme-button gray" onClick={() => changeTheme('gray')}></button>
      {/* <button className="theme-button blue" onClick={() => changeTheme('blue')}></button> */}
    </div>
  );
}
export default ThemeSelector;