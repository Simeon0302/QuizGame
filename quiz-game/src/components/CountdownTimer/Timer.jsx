import React, { useState } from "react";

function Timer({maxTime, remainingTime: timeRef, handleTimeout}) {
    const [remainingTime, setRemainingTime] = useState(maxTime);

    setTimeout(() => {
        if(remainingTime <= 0) {
            handleTimeout();
        }
        else{
            timeRef.current = remainingTime - 1;
            setRemainingTime(remainingTime - 1);
        }
    }, 1000);

    return (
        <div>
            {remainingTime}
        </div>
    )
}

export default Timer;
