import React, {useContext} from "react";
import { Link } from "react-router-dom";
import {UserAuthContext} from "./UserAuth";

function Navbar() {
    const {isAuth} = useContext(UserAuthContext);

    return (
        <div id="navbar">
            {!isAuth ? <Link className="navbar-link" to="/login">Login</Link> : null}
            {!isAuth ? <Link className="navbar-link" to="/register">Register</Link> : null}
            <Link className="navbar-link" to="/">Home</Link>
            {isAuth ? <Link className="navbar-link" to="/logout">Logout</Link> : null}
        </div>
    )
}

export default Navbar;
