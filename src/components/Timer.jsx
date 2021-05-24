import React, { useContext, useEffect, useState } from 'react';
import { MyThemeContext } from '../App';
import { toTwoDigits } from '../utils/time';
import Clock from './Clock';

const Timer = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(0);
  const toggleRun = () => {
    setIsRunning(!isRunning);
  }
  const hr = parseInt(count / (60 * 60));
  const min = parseInt((count - hr * 60 * 60) / 60);
  const secs = count - hr * 60 * 60 - min * 60;
  useEffect(() => {
    if(isRunning) {
      setTimeout(() => {
        setCount(count + 1);
      }, 1000);
    }
  }, [count, isRunning]);
  return (<>
      <div style={{fontSize: '150px'}}>{toTwoDigits(hr)}:{toTwoDigits(min)}:{toTwoDigits(secs)}</div>
      <Clock />
      <button onClick={() => {
        toggleRun();
      }}>Run</button>
  </>);
  
};

export default Timer;