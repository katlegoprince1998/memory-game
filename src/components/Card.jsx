import React from 'react';
import '../assets/css/cards.css';

const Card = ({item, id, handleClick}) => {
    const itemClass = item.stat ? " active " + item.stat : "";
  return (
    <div className={"card" + itemClass} onClick={() => handleClick(id)}>
        <p>{item.img}</p>
     
    </div>
  )
}

export default Card
