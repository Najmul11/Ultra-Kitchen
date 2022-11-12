import React, { useEffect, useState } from 'react';
import AddBreak from '../AddBreak/AddBreak';
import Dish from '../Dish/Dish';
import Sidebar from '../Sidebar/Sidebar';
import './Dishes.css'

const Dishes = () => {
    const [dishes, setDishes]=useState([])
    const [list, setList]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setDishes(data))
    },[])

    const handleAddToList=(item)=>{
       let newList=[...list, item]
        setList(newList)
    }
    return (
       <div className='container'>
            <div className='dishes'>
                <h2 className='highlight'>Hot Dishes of Today!</h2>
                <div className='dish-container'>
                        {
                          dishes.map(dish=><Dish key={dish.id} dish={dish} handleAddToList={handleAddToList}></Dish>)  
                        }
                </div>
            </div>
            <div className='sidebar'>
                    <Sidebar></Sidebar>
                    <AddBreak key={list.id} list={list}></AddBreak>
             </div>
       </div>
    );
};

export default Dishes;