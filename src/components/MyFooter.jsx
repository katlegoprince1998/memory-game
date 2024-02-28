import React from 'react';
import '../assets/css/reshuffle.css';

const MyFooter = ({reshuffle}) => {
  return (
    <div className='button-container'>
      <button onClick={() => reshuffle()}>RESHUFFLE</button>
    </div>
  )
}

export default MyFooter
