import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserAuthContext } from "../components/UserAuth";

function GameResults() {
    const { token } = useContext(UserAuthContext);
    const { gameId } = useParams();
    
    return (
        <div>
            <h1>GameResults from game {gameId}</h1>
        </div>
    )
}

export default GameResults;
