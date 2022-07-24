import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ValidateLoginForm from "../scripts/Validations/LoginValidation";
import { UserAuthContext } from "../components/UserAuth";

function LoginForm(props) {
    return (
        <div id="loginForm">
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
                <button type="submit" id="submitButton">Login</button>
            </form>
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
            Login();
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
