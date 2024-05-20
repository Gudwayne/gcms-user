import React from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useState, useEffect } from 'react'

const Timer = ({ onTimeCheck }) => {
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes <10? `0${minutes}` : minutes} : ${seconds < 10? `0${seconds}` : seconds}`;
    };
        
    
    return (
        <div className='text-white h-72 flex flex-col items-center justify-between'>
            <h1 className='text-2xl'>Session Timer</h1>

            <CountdownCircleTimer
                isPlaying
                duration={3.2 * 60}
                colors={['#301075']}
                onComplete={() => {
                    return [false, 0];
                }}
                onUpdate={(remainingTime) => {
                    onTimeCheck(remainingTime);
                }}
            >
                {({ remainingTime }) =>
                (
                <div className='text-4xl  font-poppins'>
                   {formatTime(remainingTime)}
                </div>
                )}
                
                
            </CountdownCircleTimer>

        </div>
    )
}

export default Timer