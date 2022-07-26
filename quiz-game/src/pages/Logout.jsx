import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import { UserAuthContext } from "../components/UserAuth";

function Logout() {
    const {Logout} = useContext(UserAuthContext);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        Logout();
        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Logout</button>
        </form>
    )
}

export default Logout;
