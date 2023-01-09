import React from 'react';
import { Cars } from '../cars';
import '../cards.css'

function Cards () {
    return (
        <div className='container'>
            {Cars.map(data => <Card info={data} key={data.model} />)}
        </div>
    );
};

function Card ({ info }) {
    const { img, model, cost } = info;
    return (
        <div className='product'>
            <img src={img} alt='Product' />
            <p><b>Model:</b> {model}</p>
            <p><b>Cost:</b> {cost} $</p>
        </div>
    );
};
export default Cards;