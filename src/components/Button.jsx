import React, { useState, useEffect } from 'react';

const Button = ({ type }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert('Hello');
  }, []);
  let count1 = 0;

  const onClickHandler = () => {
    count1++;
    setCount(count + 1);
  }
  switch(type) {
    case 'primary':
      return <button className="btn btn-primary my-2" onClick={onClickHandler}>{type}</button>;
    case 'secondary':
      return <button className="btn btn-secondary my-2" onClick={onClickHandler}>{type}</button>;
    case 'warning':
    default:
      return <button className="btn btn-warning my-2" onClick={onClickHandler}>{count1}</button>
  }
}

export default Button;
