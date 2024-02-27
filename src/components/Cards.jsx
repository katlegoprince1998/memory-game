// Cards.js
import React, { useState } from 'react';
import '../assets/css/cards.css';
import Card from './Card';


const Cards = () => {
    const [items, setItems] = useState([
        {id: 1, img: 'JAVA', stat: ""},
        {id: 1, img: 'JAVA', stat: ""},
        {id: 2, img: 'JavaScript', stat: ""},
        {id: 2, img: 'JavaScript', stat: ""},
        {id: 3, img: 'PYTHON', stat: ""},
        {id: 3, img: 'PYTHON', stat: ""},
        {id: 4, img: 'GO', stat: ""},
        {id: 4, img: 'GO', stat: ""},
        {id: 5, img: 'C#', stat: ""},
        {id: 5, img: 'C#', stat: ""},
        {id: 6, img: 'C++', stat: ""},
        {id: 6, img: 'C++', stat: ""},
        {id: 7, img: 'HTML', stat: ""},
        {id: 7, img: 'HTML', stat: ""},
        {id: 8, img: 'REACT JS', stat: ""},
        {id: 8, img: 'REACT JS', stat: ""},
    ].sort(() => Math.random() - 0.5));
    const [prev, setPrev] = useState(-1);

    const check = (current) => {
       if(items[current].id == items[prev].id){
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
        <div className='container'>
            {items.map((item, index) => (
                <Card key={index} item={item} id={index} handleClick={handleClick} />
            ))}
        </div>
    );
};

export default Cards;
