import React, {useContext} from "react";
import { Link } from "react-router-dom";
import LoggedUserDisplayer from "../LoggedUserDisplayer/LoggedUserDisplayer";
import {UserAuthContext} from "../UserAuth";
import styles from "./navbar.module.css";

function Navbar() {
    const {isAuth} = useContext(UserAuthContext);

    return (
        <div id={styles.navbar}>
            {!isAuth && <div className={styles.navbarItem}><Link className={styles.navbarLink} to="/login">Login</Link></div>}
            {!isAuth && <div className={styles.navbarItem}><Link className={styles.navbarLink} to="/register">Register</Link></div>}
            {isAuth && <div className={styles.navbarItem}><Link className={styles.navbarLink} to="/">Home</Link></div>}
            {isAuth && <div className={styles.navbarItem}><LoggedUserDisplayer /></div>}
            {isAuth && <div className={styles.navbarItem}><Link className={styles.navbarLink} to="/logout">Logout</Link></div>}
        </div>
    )
}

export default Navbar;
