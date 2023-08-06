import React, { useEffect } from 'react'

const Timer = ({ dispatch, secondsRemaining }) => {
    let minutes = Math.floor(secondsRemaining/60);
    let seconds = secondsRemaining % 60;
    if(seconds<10){
        seconds = "0"+ seconds
    }
    if(minutes<10){
        minutes = "0"+ minutes
    }

    useEffect(() => {
        const id = setInterval(() => {
            dispatch({ type: 'ticktime' });
        }, 1000)
        return () => clearInterval(id);
    }, [dispatch])
    return (
        <div className='timer'>{minutes}:{seconds}</div>
    )
}

export default Timer