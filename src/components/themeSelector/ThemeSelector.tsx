import React from 'react';
import type { ChangeTheme } from '../../types/theme';
import './ThemeSelector.css';

type ThemeSelectorProps = {
  changeTheme: ChangeTheme;
};

const ThemeSelector = ({ changeTheme }: ThemeSelectorProps) => {
  return (
    <div className="theme-buttons">
      <button className="theme-button orange" onClick={() => changeTheme('orange')}></button>
      <button className="theme-button white" onClick={() => changeTheme('white')}></button>
      <button className="theme-button gray" onClick={() => changeTheme('gray')}></button>
      {/* <button className="theme-button blue" onClick={() => changeTheme('blue')}></button> */}
    </div>
  );
};

export default ThemeSelector;
