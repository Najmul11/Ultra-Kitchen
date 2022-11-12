import React, { useEffect, useState } from 'react';
import { addToDb, getStoredBreakTime } from '../../utilities/fakedb';
import BreakButton from '../BreakButton/BreakButton';
import './AddBreak.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddBreak = (props) => {
    const {list}=props
    let totalTime=0;
    for (const item of list) {
       totalTime=totalTime + item.time
    }


    const [time, setTime]=useState('0 seconds')
   useEffect(()=>{
    const storedTime=getStoredBreakTime()
    setTime(storedTime)
   },[])

    const [breaktime, setBreakTime]=useState([])
   useEffect(()=>{
        fetch('time.json')
        .then(res=>res.json())
        .then(data=> setBreakTime(data))
   },[])

    const setBreak=(x)=>{
      setTime(x)
      addToDb(x)
    }
    const notify = () => toast.success("Wow so easy!",{
        position: toast.POSITION.TOP_CENTER
    });

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
                <button onClick={notify} className='finish-task-btn'>Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AddBreak;