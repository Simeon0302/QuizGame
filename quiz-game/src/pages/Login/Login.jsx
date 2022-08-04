import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ValidateLoginForm from "../../scripts/Validations/LoginValidation";
import { UserAuthContext } from "../../components/UserAuth";
import css from "./login.css";

function LoginForm(props) {
    return (
        <div id="loginContainer">
            <div id="login">
                <form onSubmit={props.onSubmit}>
                    <h2 id="headerTittle">Login</h2>
                    <div id="rowContainer">
                        <div className="row">
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                className="inputField"
                                placeholder="username"
                                onChange={props.onChange}
                            />
                            <div className="errors">
                                {props.errors.username}
                            </div>
                        </div>
                        <div className="row">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                className="inputField"
                                placeholder="********"
                                onChange={props.onChange}
                            />
                            <div className="errors">
                                {props.errors.password}
                            </div>
                        </div>
                    </div>
                    <button type="submit" id="submitButton">Login</button>
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
            style={css}
            onChange={handleChange}
            onSubmit={handleSubmit}
            errors={errors}
        />
    )
}

export default Login;
