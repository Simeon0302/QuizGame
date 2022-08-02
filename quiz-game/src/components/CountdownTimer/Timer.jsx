import React, { useState, useEffect } from "react";

function Timer({maxTime, remainingTime: timeRef, handleTimeout, isTimerEnded, setIsTimerEnded}) {
    const [remainingTime, setRemainingTime] = useState(maxTime);
    useEffect(() => {
        if(!isTimerEnded) {
            setTimeout(() => {
                if(remainingTime - 1 === 0) {
                    timeRef.current = remainingTime - 1;
                    setRemainingTime(remainingTime - 1);
                    setIsTimerEnded(true);
                    handleTimeout();
                }
                else if (remainingTime > 0) {
                    timeRef.current = remainingTime - 1;
                    setRemainingTime(remainingTime - 1);
                }
            }, 1000);
        }
    }, [remainingTime]);

    return (
        <div>
            {remainingTime}
        </div>
    )
}

export default Timer;
