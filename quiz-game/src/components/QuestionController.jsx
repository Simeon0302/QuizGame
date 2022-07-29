import React, { useRef } from "react";
import TimerDisplayer from "./CountdownTimer/TimerDisplayer";

function QuestionController({handleTimeout, handleAnswer, questionObj, maxTime}) {
    const question = questionObj.content;
    const answers = questionObj.answers;
    const answerButtons = answers.map(({id, content}) => {
        return (<button key={id} answer-id={id} onClick={onAnswer}>{content}</button>);
    })
    const remainingTime = useRef(maxTime);

    function onAnswer(event) {
        handleAnswer(event, remainingTime.current);
    }

    return (
        <div>
            <div>
                <TimerDisplayer maxTime={maxTime} remainingTime={remainingTime} handleTimeout={handleTimeout} />
            </div>
            <h1>{question}</h1>
            {answerButtons}
        </div>
    )
}

export default QuestionController;
