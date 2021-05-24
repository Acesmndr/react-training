import React from 'react';
import { ThemeContext } from '../App';

const ThemeSwitcher = () => {
  const { toggleTheme } = React.useContext(ThemeContext);
  return <div>
    <button onClick={() => { toggleTheme() }}> Toggle Theme </button>
  </div>
}

export default ThemeSwitcher;
