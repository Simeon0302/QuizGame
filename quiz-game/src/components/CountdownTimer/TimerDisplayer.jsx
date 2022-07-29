import React from "react";
import Timer from "../CountdownTimer/Timer";
import "./timer.css";

const setAnimation = (duration) => {
    return {animation: `countdown ${duration}s linear infinite forwards`};
}

function TimerDisplayer({maxTime, remainingTime, handleTimeout}) {
    return (
        <div id="countdown">
            <div id="countdown-number">
                <Timer maxTime={maxTime} remainingTime={remainingTime} handleTimeout={handleTimeout} />
            </div>
            <svg>
                <circle style={setAnimation(maxTime)} r="18" cx="20" cy="20"></circle>
            </svg>
        </div>
    )
}

export default TimerDisplayer;
