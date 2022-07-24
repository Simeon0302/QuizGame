import CheckInputField from './InputFieldValidate';

function ValidateLoginForm(username, password, setErrors) {
    const usernameError = CheckInputField(username);
    const passwordError = CheckInputField(password);
    const isThereErrors = usernameError.length > 0 || passwordError.length > 0;

    setErrors({
        username: usernameError,
        password: passwordError
    });
    return isThereErrors;
}

export default ValidateLoginForm;