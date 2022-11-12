import React from 'react';
import './Dish.css'

const Dish = (props) => {
    const {handleAddToList,dish}=props
    const {name, time, description, img}=dish
    return (
        <div className='dish-info'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p><b>Time required: {time}min</b></p>
            <button onClick={()=>handleAddToList(dish)} className='add-button'>Add to list</button>
        </div>
    );
};

export default Dish;