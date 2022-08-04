import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ValidateRegisterForm from "../../scripts/Validations/RegisterValidation";
import { UserAuthContext } from "../../components/UserAuth";
import formStyles from "../../styles/form.module.css";
import registerStyles from "./register.module.css";

function RegisterForm(props) {
    return (
        <div id={registerStyles.register}>
            <div id={formStyles.container}>
                <form onSubmit={props.onSubmit}>
                    <h2 id={formStyles.headerTittle}>Register</h2>
                    <div id={formStyles.rowContainer}>
                        <div className={formStyles.row}>
                            <label>Username:</label>
                            <input
                                type="text"
                                name="username"
                                className={formStyles.inputField}
                                placeholder="Username"
                                onChange={props.onChange}
                            />
                            <div className={formStyles.errors}>
                                {props.errors.username}
                            </div>
                        </div>
                        <div className={formStyles.row}>
                            <label>Password:</label>
                            <input
                                type="password"
                                name="password"
                                className={formStyles.inputField}
                                placeholder="********"
                                onChange={props.onChange}
                            />
                            <div className={formStyles.errors}>
                                {props.errors.password}
                            </div>
                        </div>
                        <div className={formStyles.row}>
                            <label>Re-enter password:</label>
                            <input 
                                type="password"
                                name="confirmPassword"
                                className={formStyles.inputField}
                                placeholder="********"
                                onChange={props.onChange}
                            />
                            <div className={formStyles.errors}>
                                {props.errors.confirmPassword}
                            </div>
                        </div>
                    </div>
                    <button type="submit" id={formStyles.submitButton}>Register</button>
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
