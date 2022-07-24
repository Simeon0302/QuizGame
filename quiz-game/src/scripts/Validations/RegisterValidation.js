import CheckInputField from './InputFieldValidate';
import CheckIfPasswordsMatch from './IsPasswordsMatch';

function ValidateRegisterForm(username, password, confirmPassword, setErrors) {
    const usernameError = CheckInputField(username);
    const passwordError = CheckInputField(password);
    const confirmPasswordError = CheckIfPasswordsMatch(password, confirmPassword);
    const isThereErrors = usernameError.length > 0
        || passwordError.length > 0
        || confirmPasswordError.length > 0;

    setErrors({
        username: usernameError,
        password: passwordError,
        confirmPassword: confirmPasswordError
    });
    return isThereErrors;
}

export default ValidateRegisterForm;