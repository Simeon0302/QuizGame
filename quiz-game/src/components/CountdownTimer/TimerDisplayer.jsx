import React, { useState } from "react";
import Timer from "../CountdownTimer/Timer";
import "./timer.css";

let timeoutCircle = <circle style={{animation: "none"}} r="18" cx="20" cy="20"></circle>;

function SetAnimation(duration) {
    const style = {animation: `countdown ${duration}s linear infinite forwards`};
    timeoutCircle = <circle style={style} r="18" cx="20" cy="20"></circle>;
}

function SetAnswerAnimation() {
    const style = {animation: "none", stroke: "green"}
    timeoutCircle = <circle style={style} r="18" cx="20" cy="20"></circle>;
}

function SetTimeoutStyle() {
    const style = { animation: "none", stroke: "red" };
    timeoutCircle = <circle style={style} r="18" cx="20" cy="20"></circle>;
}

function TimerDisplayer({isAnswered, maxTime, remainingTime, handleTimeout}) {
    const [isTimerEnded, setIsTimerEnded] = useState(false);
    
    if(!isTimerEnded) {
        SetAnimation(maxTime)
    }
    else {
        SetTimeoutStyle();
    }
    if(isAnswered) {
        SetAnswerAnimation();
    }

    return (
        <div id="countdown">
            <div id="countdown-number">
                {isAnswered ?
                    <div>{remainingTime.current}</div> :
                    <Timer
                        maxTime={maxTime}
                        remainingTime={remainingTime}
                        handleTimeout={handleTimeout}
                        isTimerEnded={isTimerEnded}
                        setIsTimerEnded={setIsTimerEnded}
                    />
                }
            </div>
            <svg>
                {timeoutCircle}
            </svg>
        </div>
    )
}

export default TimerDisplayer;
