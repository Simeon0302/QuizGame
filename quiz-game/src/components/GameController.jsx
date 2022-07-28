import React from "react";
import QuestionController from "./QuestionController";
import GameScore from "./GameScore";
import Loading from "./LoadingSpinner/Loading";

const maxTime = 50;

function GameController({ws, gameData}) {
    const {score, questionObj} = gameData;

    function handleAnswer(event, time) {
        const answerId = Number(event.target.getAttribute("answer-id"));
        console.log("Answer id " + answerId);
        console.log("Time for making answer: " + time);

        ws.send(JSON.stringify({
            type: "question_answer",
            data: {
                answer: answerId,
                time: time
            }
        }));

        gameData.Reset();
    }

    function handleTimeout() {
        console.log("timeout");
        
        ws.send(JSON.stringify({
            type: "question_answer",
            data: {
                answer: 1,
                time: 0
            }
        }))

        gameData.Reset();
    }

    return (
        <div id="GameController">
            {gameData.isReady ? 
                <div>
                    <GameScore score={score}/>
                    <QuestionController
                        handleAnswer={handleAnswer}
                        handleTimeout={handleTimeout}
                        questionObj={questionObj}
                        maxTime={maxTime}
                    />
                </div> :
                <Loading message="Loading" />
            }
        </div>
    )
}

export default GameController;
