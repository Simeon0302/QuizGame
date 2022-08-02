import React, { useRef, useState } from "react";
import AnswersButtons from "./AnswersButtons";
import TimerDisplayer from "./CountdownTimer/TimerDisplayer";

const timeBeforeSendingResponse = 3000;

function QuestionController({handleTimeout, handleAnswer, questionObj, maxTime}) {
    const question = questionObj.content;
    const answers = questionObj.answers;
    const [playerAnswerObj, setPlayerAnswerObj] = useState({isAnswered: false, answerId: null, isTimeout: false});
    const remainingTime = useRef(maxTime);

    function onAnswer(event) {
        const answerId = Number(event.target.getAttribute("answer-id"));
        setPlayerAnswerObj({
            isAnswered: true,
            answerId: answerId
        })
        setTimeout(() => {
            handleAnswer(answerId, remainingTime.current);
        }, timeBeforeSendingResponse)
    }

    function onTimeout(event) {
        setPlayerAnswerObj({
            isTimeout: true
        })
        setTimeout(() => {
            handleTimeout(event);
        }, timeBeforeSendingResponse);
    }

    return (
        <div>
            <div>
                <TimerDisplayer
                    maxTime={maxTime}
                    remainingTime={remainingTime}
                    handleTimeout={onTimeout}
                    isAnswered={playerAnswerObj.isAnswered}
                />
            </div>
            <h1>{question}</h1>
            <AnswersButtons
                playerAnswerObj={playerAnswerObj}
                handleAnswer={onAnswer}
                answersList={answers}
            />
        </div>
    )
}

export default QuestionController;
