function CheckIfPasswordsMatch(password, confirmPassword) {
    return password === confirmPassword ? "" : "Passwords do not match.";
}

export default CheckIfPasswordsMatch