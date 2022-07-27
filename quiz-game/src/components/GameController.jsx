import React from "react";
import QuestionController from "./QuestionController";

function GameController({questionObj}) {
    function handleAnswer(event, time) {
        console.log("Answer id " + event.target.getAttribute("answer-id"));
        console.log("Time for making answer: " + time);
    }

    function handleTimeout() {
        console.log("timeout");
    }

    return (
        <QuestionController
            handleAnswer={handleAnswer}
            handleTimeout={handleTimeout}
            questionObj={questionObj}
            time={20}
        />        
    )
}

export default GameController;
