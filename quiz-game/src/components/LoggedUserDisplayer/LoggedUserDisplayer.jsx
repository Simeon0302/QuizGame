import React, { useContext, useState, useEffect } from "react";
import { UserAuthContext } from "../UserAuth";
import axios from "../../scripts/axios";
import "./loggedUserDisplayer.css";

function LoggedUserDisplayer() {
    const { token, username } = useContext(UserAuthContext);
    const [image, setImage] = useState(null);

    useEffect(() => {
        axios.defaults.headers.common.Authorization = `Token ${token}`;
        axios.get(`/api/players/me`)
            .then((res) => {
                setImage(res.data.avatar);
            })
            .catch((err) => {
                console.log(err);
            })
        axios.defaults.headers.common = {};
    }, [])

    return (
        <div id="loggedUserContainer">
            <h1 id="username">{username}</h1>
            <img id="loggedUserIcon" src={image} alt="Logged User Icon" />
        </div>
    )
}

export default LoggedUserDisplayer;
