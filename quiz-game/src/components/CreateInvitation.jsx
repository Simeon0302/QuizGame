import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CheckInputField from "../scripts/Validations/InputFieldValidate";
import axios from "../scripts/axios";
import { UserAuthContext } from "../components/UserAuth";

function CreateInvitationForm(props) {
    return (
        <div id="createInvitationForm">
            <form onSubmit={props.onSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        className="inputField"
                        placeholder="Username"
                        onChange={props.onChange}
                    />
                    {props.errors.username}
                </label>
                <button type="submit" className="submitButton">Send Invitation</button>
            </form>
        </div>
    )
}

function CreateInvitations() {
    const [username, setUsername] = useState("");
    const [errors, setErrors] = useState({ username: "" });
    const {token} = useContext(UserAuthContext);
    const navigate = useNavigate();

    function handleChange(event) {
        setUsername(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const usernameError = CheckInputField(username);
        setErrors({username: usernameError});

        if(usernameError.length === 0) {
            axios.defaults.headers.common.Authorization = `Token ${token}`;
            axios.post(`${process.env.REACT_APP_BASE_URL}/api/games/`, {
                username: username
            })
            .then((res) => {
                navigate(`/game/${res.data.channel}`);
            })
            .catch((e) => {
                console.log(e);
            })
        }
    }

    return (
        <div id="createInvitation">
            <CreateInvitationForm
                onChange={handleChange}
                onSubmit={handleSubmit}
                errors={errors}
            />
        </div>
    )

}

export default CreateInvitations;
