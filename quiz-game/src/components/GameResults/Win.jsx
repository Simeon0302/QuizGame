import React from "react";

function Win({user}) {
    return (
        <div id="winMessage">
            <h1>Congratulations {user.username}!</h1>
            <h1>You have won the game with {user.score} points!</h1>
        </div>
    )
}

export default Win;
