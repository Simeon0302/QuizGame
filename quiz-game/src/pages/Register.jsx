import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ValidateRegisterForm from "../scripts/Validations/RegisterValidation";
import { UserAuthContext } from "../components/UserAuth";

function RegisterForm(props) {
    return (
        <div id="registerForm">
            <form onSubmit={props.onSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        className="inputField"
                        placeholder="Username"
                        onChange={props.onChange}
                    />
                    {props.errors.username}
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        className="inputField"
                        placeholder="Password"
                        onChange={props.onChange}
                    />
                    {props.errors.password}
                </label>
                <label>
                    Re-enter password:
                    <input 
                        type="password"
                        name="confirmPassword"
                        className="inputField"
                        placeholder="Re-enter password"
                        onChange={props.onChange}
                    />
                    {props.errors.confirmPassword}
                </label>
                <button type="submit" id="submitButton">Register</button>
            </form>
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
    const {Login} = useContext(UserAuthContext);
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
            Login();
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
