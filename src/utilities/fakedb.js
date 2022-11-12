const addToDb = x =>{
  localStorage.setItem('break-time',x)
}

const getStoredBreakTime=()=>{
    let breakTime = '';

    const storedBreakTime = localStorage.getItem('break-time');
    if(storedBreakTime){
        breakTime = storedBreakTime;
    }
    return breakTime;
}

export {
    addToDb, 
    getStoredBreakTime,
}