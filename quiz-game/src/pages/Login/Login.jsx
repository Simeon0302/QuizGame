import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ValidateLoginForm from "../../scripts/Validations/LoginValidation";
import { UserAuthContext } from "../../components/UserAuth";
import styles from "./login.module.css";

function LoginForm(props) {
    return (
        <div id={styles.loginContainer}>
            <div id={styles.login}>
                <form onSubmit={props.onSubmit}>
                    <h2 id={styles.headerTittle}>Login</h2>
                    <div id={styles.rowContainer}>
                        <div className={styles.row}>
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                className={styles.inputField}
                                placeholder="username"
                                onChange={props.onChange}
                            />
                            <div className={styles.errors}>
                                {props.errors.username}
                            </div>
                        </div>
                        <div className={styles.row}>
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                className={styles.inputField}
                                placeholder="********"
                                onChange={props.onChange}
                            />
                            <div className={styles.errors}>
                                {props.errors.password}
                            </div>
                        </div>
                    </div>
                    <button type="submit" id={styles.submitButton}>Login</button>
                </form>
            </div>
        </div>
    )
}

function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        username: "",
        password: "",
    })
    const {Login} = useContext(UserAuthContext);
    const navigate = useNavigate();
    function handleChange(event) {
        if(event.target.name === "username") {
            setUsername(event.target.value);
        }
        else if(event.target.name === "password") {
            setPassword(event.target.value);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        if(!ValidateLoginForm(username, password, setErrors)) {
            Login(username, password);
            navigate("/");
        }
    }
    return (
        <LoginForm
            onChange={handleChange}
            onSubmit={handleSubmit}
            errors={errors}
        />
    )
}

export default Login;
