import React from "react";
import QuestionController from "./QuestionController";
import GameScore from "./GameScore";
import Loading from "./LoadingSpinner/Loading";

const maxTimeForAnswering = 30;

function GameController({ws, gameData, setIsGameDataLoaded}) {
    const {score, questionObj} = gameData;

    function handleAnswer(answerId, time) {
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
        setIsGameDataLoaded(false);
    }

    function handleTimeout() {
        console.log("timeout");
        
        ws.send(JSON.stringify({
            type: "question_answer",
            data: {
                answer: null,
                time: -1
            }
        }))

        gameData.Reset();
        setIsGameDataLoaded(false);
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
                        maxTime={maxTimeForAnswering}
                    />
                </div> :
                <Loading message="Waiting for the other player..." />
            }
        </div>
    )
}

export default GameController;
