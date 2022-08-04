import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CheckInputField from "../../scripts/Validations/InputFieldValidate";
import axios from "../../scripts/axios";
import { UserAuthContext } from "../UserAuth";
import formStyles from "../../styles/form.module.css";

function CreateInvitationForm(props) {
    return (
        <div id={formStyles.container}>
            <form onSubmit={props.onSubmit}>
                <h2 id={formStyles.headerTittle}>Send invite to other players</h2>
                <div id={formStyles.rowContainer}>
                    <div className={formStyles.row}>
                        <label>Username:</label>
                        <input
                            type="text"
                            className={formStyles.inputField}
                            placeholder="Username"
                            onChange={props.onChange}
                        />
                        <div className={formStyles.errors}>
                            {props.errors.username}
                        </div>
                    </div>
                </div>
                <button type="submit" id={formStyles.submitButton}>Send Invitation</button>
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
                navigate(`/game/${res.data.channel}/${res.data.id}`);
            })
            .catch((e) => {
                console.log(e);
            })
        }
    }

    return (
        <CreateInvitationForm
            onChange={handleChange}
            onSubmit={handleSubmit}
            errors={errors}
        />
    )

}

export default CreateInvitations;
