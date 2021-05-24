import React, { useContext, useEffect, useState } from 'react';
import { MyThemeContext } from '../App';

export const useTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  
  useEffect(() => {
    setTimeout(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  });
  return time;
}

const Clock = () => {
  const time = useTime();
  const themeContext = useContext(MyThemeContext);
  return (<>
    {themeContext.theme}
    <button onClick={() => {themeContext.updateTheme()}}>ToggleTheme</button>
    {time}
  </>);
};

export default Clock;
