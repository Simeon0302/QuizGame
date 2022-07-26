function ValidateField(input) {
    return input.length === 0 ? "This field cannot be empty." : "";
}

export default ValidateField