import React, {useState} from "react";
import Validate from "../scripts/RegisterValidation";

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
        if(!Validate(username, password, confirmPassword, setErrors)) {
            console.log('Submitting');
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
