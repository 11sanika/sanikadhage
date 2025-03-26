document.getElementById("registerBtn").addEventListener("click", function () {
    let isValid = true;

    // Get form values
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value.trim();
    let address = document.getElementById("address").value.trim();
    let state = document.getElementById("state").value.trim();
    let country = document.getElementById("country").value;
    let terms = document.getElementById("terms").checked;

    // Reset error messages
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    // Validation rules
    if (firstName === "") {
        document.getElementById("firstNameError").textContent = "This field is required.";
        isValid = false;
    }
    if (lastName === "") {
        document.getElementById("lastNameError").textContent = "This field is required.";
        isValid = false;
    }
    if (email === "" || !email.includes("@")) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        isValid = false;
    }
    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
        isValid = false;
    }
    if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
        isValid = false;
    }
    if (!document.querySelector("input[name='gender']:checked")) {
        document.getElementById("genderError").textContent = "Select your gender.";
        isValid = false;
    }
    if (age === "" || age < 18) {
        document.getElementById("ageError").textContent = "Must be at least 18 years old.";
        isValid = false;
    }
    if (phone === "" || !/^\d{10}$/.test(phone)) {
        document.getElementById("phoneError").textContent = "Enter a valid 10-digit phone number.";
        isValid = false;
    }
    if (address === "") {
        document.getElementById("addressError").textContent = "Address is required.";
        isValid = false;
    }
    if (state === "") {
        document.getElementById("stateError").textContent = "State is required.";
        isValid = false;
    }
    if (country === "") {
        document.getElementById("countryError").textContent = "Select a country.";
        isValid = false;
    }
    if (!document.querySelector("input[name='language']:checked")) {
        document.getElementById("languageError").textContent = "Select at least one language.";
        isValid = false;
    }
    if (!terms) {
        document.getElementById("termsError").textContent = "You must agree to the terms.";
        isValid = false;
    }

    // If all fields are valid, submit the form
    if (isValid) {
        alert("Registration Successful!");
    }
});
