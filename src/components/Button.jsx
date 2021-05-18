import React, { useState } from 'react';

const Button = (props) => {
  const [count, setCount] = useState(0);
  let count1 = 0;

  const onClickHandler = () => {
    count1++;
    setCount(count + 1);
  }
  switch(props.type) {
    case 'primary':
      return <button className="btn btn-primary my-2" onClick={onClickHandler}>{count}<ArkoComponent type={props.type} countOfParent={count} /></button>;
    case 'secondary':
      return <button className="btn btn-secondary my-2" onClick={onClickHandler}>{count}</button>;
    case 'warning':
    default:
      return <button className="btn btn-warning my-2" onClick={onClickHandler}>{count1}</button>
  }
}

export default Button;
