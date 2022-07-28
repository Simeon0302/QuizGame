import React from "react";

function GameScore({score}) {
    const playerOneUsername = Object.keys(score)[0];
    const playerTwoUsername = Object.keys(score)[1];

    return (
        <div id="gameScore">
            <h1>{playerOneUsername} - {score[playerOneUsername]} / {playerTwoUsername} - {score[playerTwoUsername]}</h1>
        </div>
    )
}

export default GameScore;
