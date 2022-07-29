import React, {useContext} from "react";
import { Link } from "react-router-dom";
import LoggedUserDisplayer from "../LoggedUserDisplayer/LoggedUserDisplayer";
import {UserAuthContext} from "../UserAuth";
import "./navbar.css";

function Navbar() {
    const {isAuth} = useContext(UserAuthContext);

    return (
        <div id="navbar">
            {!isAuth && <div className="navbar-item"><Link className="navbar-link" to="/login">Login</Link></div>}
            {!isAuth && <div className="navbar-item"><Link className="navbar-link" to="/register">Register</Link></div>}
            {isAuth && <div className="navbar-item"><Link className="navbar-link" to="/">Home</Link></div>}
            {isAuth && <div className="navbar-item"><LoggedUserDisplayer /></div>}
            {isAuth && <div className="navbar-item"><Link className="navbar-link" to="/logout">Logout</Link></div>}
        </div>
    )
}

export default Navbar;
