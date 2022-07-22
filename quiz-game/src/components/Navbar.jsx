import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div id="navbar">
            <Link className="navbar-link" to="/login">Login</Link>
            <Link className="navbar-link" to="/register">Register</Link>
        </div>
    )
}

export default Navbar;
