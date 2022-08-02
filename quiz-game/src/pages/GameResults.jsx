import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserAuthContext } from "../components/UserAuth";
import axios from "../scripts/axios";
import GameResultsDisplayer from "../components/GameResults/GameResultsDisplayer";
import Loading from "../components/LoadingSpinner/Loading";

function GameResults() {
    const { token, username } = useContext(UserAuthContext);
    const { gameId } = useParams();
    const [gameData, setGameData] = useState(null);
    
    useEffect(() => {
        axios.defaults.headers.common.Authorization = `Token ${token}`;
        axios.get(`/api/games/${gameId}`)
            .then((res) => {
                setGameData(res.data);
                axios.defaults.headers.common = {};
            })
            .catch((err) => {
                console.log(err);
            })
        return () => {
            axios.defaults.headers.common = {};
        }
    }, [])

    return (
        <div>
            {gameData !== null ? <GameResultsDisplayer data={gameData} username={username} /> : <Loading message="Getting game data" />}
        </div>
    )
}

export default GameResults;
