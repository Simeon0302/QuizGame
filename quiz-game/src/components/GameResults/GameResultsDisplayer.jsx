import React from "react";
import Win from "./Win";
import Lose from "./Lose";

function GameResultsDisplayer({data, username}) {
    const { winner } = data;
    const score = data.data.score;
    const user = data.players.find((player) => player.username === username);
    user.score = score[username];
    const isWinner = winner.username === username;
    return (
        <div>
            {isWinner ? <Win user={user} /> : <Lose user={user} />}
        </div>
    )
}

export default GameResultsDisplayer;
