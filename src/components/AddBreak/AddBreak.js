import React, { useEffect, useState } from 'react';
import BreakButton from '../BreakButton/BreakButton';
import './AddBreak.css'

const AddBreak = (props) => {
    const {list}=props
    let totalTime=0;
    for (const item of list) {
       totalTime=totalTime + item.time
    }

    const [time, setTime]=useState('0 seconds')
    const [breaktime, setBreakTime]=useState([])
   useEffect(()=>{
        fetch('time.json')
        .then(res=>res.json())
        .then(data=> setBreakTime(data))
   },[])

    const setBreak=(x)=>{
      setTime(x)
    }

    return (
        <div className='activities'>
            <p>Add A Break</p>
            <div className='break-button'>
                {
                    breaktime.map(time=><BreakButton key={time.id} breaktime={time} setBreak={setBreak}></BreakButton>)
                }
            </div>
            <div>
                <p>Activity Details</p>
                <div className='info'>
                    <p>Waiting time</p>
                    <p className='time'>{totalTime} minutes</p>
                </div>
                <div className='info'>
                    <p>Break time</p>
                    <p className='time'>{time.slice(0,2)} seconds</p>
                </div>
                <button className='finish-task-btn'>Activity Completed</button>
            </div>
        </div>
    );
};

export default AddBreak;