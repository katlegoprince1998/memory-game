// Cards.js
import React, { useState } from 'react';
import '../assets/css/cards.css';
import Card from './Card';
import data from '../data/data';
import MyFooter from './MyFooter';


const Cards = () => {
    const [items, setItems] = useState(data().sort(() => Math.random() - 0.5));
    const [prev, setPrev] = useState(-1);
    const reshuffle = () => {
         setItems(data().sort(() => Math.random() - 0.5));
         setPrev(-1);
         

    }

    const check = (current) => {
       if(items[current].id === items[prev].id){
        items[current].stat = "correct";
        items[prev].stat = "correct";
        setItems([...items])
        setPrev(-1);
       }else{
        items[current].stat = "wrong";
        items[prev].stat = "wrong";
        setItems([...items])
        setTimeout(() => {
            items[current].stat = "";
            items[prev].stat = "";
            setItems([...items])
            setPrev(-1)
        }, 1000)
       }
    }

    const handleClick = (id) => {
      
       if(prev === -1){
        items[id].stat = "active";
        setItems([...items])
        setPrev(id);
       }else{
        check(id);
       }
      
    }

    return (
        <>
        <div className='container'>
            {items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            ))}
        </div>
        <MyFooter reshuffle={reshuffle} />
        </>
    );
};

export default Cards;
