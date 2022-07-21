import React from "react";

function UserCredentialsForm(props) {
    return (
        <div id="credentialsForm">
            <form onSubmit={props.onSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        className="inputField"
                        placeholder="Username"
                        onChange={(e) => props.onChange(e, "username")}
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="text"
                        className="inputField"
                        placeholder="Password"
                        onChange={(e) => props.onChange(e, "password")}
                    />
                </label>
                <button type="submit" id="submitButton">{props.action}</button>
            </form>
        </div>
    )
}

class UserCredentials extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        }
    }

    handleIputChange(event, stateKey) {
        if (stateKey === "username") {
            this.setState({ username: event.target.value });
        } else if (stateKey === "password") {
            this.setState({ password: event.target.value });
        }
    }

    handleSubmit(event) {
        console.log("UserCredentials is submiting data");
        event.preventDefault();
    }

    render() {
        return (
            <UserCredentialsForm
                onChange={(e, stateKey) => this.handleIputChange(e, stateKey)}
                onSubmit={(e) => this.handleSubmit(e)}
                action={this.props.action}
            />
        )
    }
}

export default UserCredentials;
