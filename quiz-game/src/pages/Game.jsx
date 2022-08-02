import React, { useContext, useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { UserAuthContext } from "../components/UserAuth";
import Loading from "../components/LoadingSpinner/Loading";
import GameController from "../components/GameController";
import GameData from "../scripts/GameData";

function Game() {
    const { token } = useContext(UserAuthContext);
    const { channel, gameId } = useParams();
    const navigate = useNavigate();

    const [isGameStarted, setIsGameStarted] = useState(false);
    const [isGameDataLoaded, setIsGameDataLoaded] = useState(false);
    
    const ws = useRef(null);
    const gameData = useRef(null);

    useEffect(() => {
        if (ws.current === null) {
            console.log("Socket");
            const socketURL = `ws://192.168.182.94:8001/ws/game/${token}/${channel}/`;
            const socket = new WebSocket(socketURL);

            socket.onopen = () => {
                console.log("Connected to game WebSocket");
                socket.send(JSON.stringify({ type: "game_connect", data: "ok" }));
                gameData.current = new GameData();
            }

            socket.onmessage = (res) => {
                const { type, data } = JSON.parse(res.data);
                console.log(type, data);
                if (type === "game_update") {
                    if (data.state === "in_progress") {
                        setIsGameStarted(true);
                    }

                    else if (data.state === "finished") {
                        navigate(`/game/results/${gameId}`);
                    }
                }

                else if (type === "question_update") {
                    gameData.current.questionObj = data;
                    setIsGameDataLoaded(gameData.current.isReady);
                }
                
                else if (type === "scores_update") {
                    gameData.current.score = data;
                    setIsGameDataLoaded(gameData.current.isReady);
                }
            }

            socket.onerror = (err) => {
                console.log(err);
            }

            socket.onclose = (e) => {
                console.log("Connection closed");
            }

            ws.current = socket;
        }
    }, []);

    return (
        <div>
            {isGameStarted ? <GameController ws={ws.current} gameData={gameData.current} setIsGameDataLoaded={setIsGameDataLoaded} /> : <Loading message="Waiting for the game to start..." />}
        </div>
    )
}

export default Game;
