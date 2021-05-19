import React, { useEffect, useState } from 'react';
import Button from './Button';

const Card = () => {
  const [cardState, setCardState] = useState('primary');
  useEffect(() => {
    if(cardState === 'secondary') {
      setCardState('warning');
    }
  }, [cardState]);
  const onClickHandler = () => {
    setCardState(cardState === 'primary' ? 'secondary' : 'primary');
  };
  
  return <div>
    <button onClick={onClickHandler}>Click Me</button>
    <Button type={cardState} />
    </div>

};

export default Card;
