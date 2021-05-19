import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }, [count]);
  
  return (<>
      <div style={{fontSize: '300px'}}>{count}</div>
  </>);
  
};

export default Timer;