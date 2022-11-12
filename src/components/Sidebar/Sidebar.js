import React from 'react';
import './Sidebar.css'
import image from '../../images/Najmul.png'
import About from '../About/About';

const Sidebar = () => {
    return (
        <div>
            <div className='about'>
                <img src={image} alt="" />
               <div>
                    <p className='name'>Najmul Hoque</p>
                    <p className='location'>Kidney, Austria</p>
                    <p className='location'>Studying CSE</p>
               </div>
            </div>
            <div  className='about-info'>
                <About key={'1abc'} term={'Weight'} unit={'kg'} value={75}></About>
                <About key={'2abc'} term={'Height'} unit={'feet'} value={5.6}></About>
                <About key={'3abc'} term={'Age'} unit={'yrs'} value={25}></About>
            </div>
        </div>
    );
};

export default Sidebar;