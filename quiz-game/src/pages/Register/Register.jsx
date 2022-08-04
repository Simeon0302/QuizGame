import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ValidateRegisterForm from "../../scripts/Validations/RegisterValidation";
import { UserAuthContext } from "../../components/UserAuth";
import styles from "./register.module.css";

function RegisterForm(props) {
    return (
        <div id={styles.registerContainer}>
            <div id={styles.register}>
                <form onSubmit={props.onSubmit}>
                    <h2 id={styles.headerTittle}>Register</h2>
                    <div id={styles.rowContainer}>
                        <div className={styles.row}>
                            <label>Username:</label>
                            <input
                                type="text"
                                name="username"
                                className={styles.inputField}
                                placeholder="Username"
                                onChange={props.onChange}
                            />
                            <div className={styles.errors}>
                                {props.errors.username}
                            </div>
                        </div>
                        <div className={styles.row}>
                            <label>Password:</label>
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
                        <div className={styles.row}>
                            <label>Re-enter password:</label>
                            <input 
                                type="password"
                                name="confirmPassword"
                                className={styles.inputField}
                                placeholder="********"
                                onChange={props.onChange}
                            />
                            <div className={styles.errors}>
                                {props.errors.confirmPassword}
                            </div>
                        </div>
                    </div>
                    <button type="submit" id={styles.submitButton}>Register</button>
                </form>
            </div>
        </div>
    )
}

function Register(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({
        username: "",
        password: "",
        confirmPassword: ""
    });
    const { Register } = useContext(UserAuthContext);
    const navigate = useNavigate();

    function handleChange(event) {
        if(event.target.name === "username") {
            setUsername(event.target.value);
        }
        else if(event.target.name === "password") {
            setPassword(event.target.value);
        }
        else if(event.target.name === "confirmPassword") {
            setConfirmPassword(event.target.value);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        if(!ValidateRegisterForm(username, password, confirmPassword, setErrors)) {
            Register(username, password);
            navigate("/");
        }
    }

    return (
        <RegisterForm 
            onChange={handleChange}
            onSubmit={handleSubmit}
            errors={errors}
        />
    )
}

export default Register;
