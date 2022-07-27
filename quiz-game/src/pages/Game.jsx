import React, { useContext, useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { UserAuthContext } from "../components/UserAuth";
import Loading from "../components/LoadingSpinner/Loading";
import GameController from "../components/GameController";

function Game(props) {
    const { token } = useContext(UserAuthContext);
    const { channel, gameId } = useParams();
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [questionObj, setQuestionObj] = useState(null);
    const ws = useRef(null);

    useEffect(() => {
        if (ws.current === null) {
            const socketURL = `ws://192.168.182.94:8001/ws/game/${token}/${channel}/`;
            const socket = new WebSocket(socketURL);

            socket.onopen = () => {
                console.log("Connected to game WebSocket");
                socket.send(JSON.stringify({ type: "game_connect", data: "ok" }));
            }

            socket.onmessage = (res) => {
                const { type, data } = JSON.parse(res.data);
                console.log(type, data);
                if (data.state !== "initial") {
                    if (type === "game_update") {
                        setIsGameStarted(true);
                    }
                    if (type === "question_update") {
                        setQuestionObj(data);
                    }
                }
            }

            socket.onerror = (err) => {
                console.log(err);
            }

            socket.onclose = (e) => {
                console.log("Connection is closed");
            }

            ws.current = socket;
        }
    }, []);

    return (
        <div>
            {isGameStarted && questionObj !== null ? <GameController questionObj={questionObj} /> : <Loading message="Waiting for the game to start..." />}
        </div>
    )
}

export default Game;
