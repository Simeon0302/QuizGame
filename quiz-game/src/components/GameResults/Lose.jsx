import React from "react";

function Lose({user}) {
    return (
        <div id="loseMessage">
            <h1>{user.username} you have lost!</h1>
            <h1>You got only {user.score} points</h1>
        </div>
    )
}

export default Lose;
