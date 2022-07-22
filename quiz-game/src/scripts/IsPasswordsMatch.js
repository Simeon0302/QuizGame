function CheckIfPasswordsMatch(password, confirmPassword) {
    return password === confirmPassword ? "" : "Password does not match.";
}

export default CheckIfPasswordsMatch