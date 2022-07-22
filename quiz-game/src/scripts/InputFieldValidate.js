function ValidateField(input) {
    if(input.length === 0) return "This field cannot be empty.";
    else return "";
}

export default ValidateField