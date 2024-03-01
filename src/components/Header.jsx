import React from 'react';
import '../assets/css/header.css';

const Header = ({moves, score}) => {
  return (
    <>
    <div className='header-box'>
      <h1>Memory Game</h1>
    </div>
    <div className='score-timer-moves'>
        <h1>Score: <span>{score}</span></h1>
        <h1>Timer: <span>00</span></h1>
        <h1>Moves: <span>{moves}</span></h1>
      </div>

    </>
  )
}

export default Header
