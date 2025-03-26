function validateForm() {
    let isValid = true;

    // Get form values
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let website = document.getElementById("website");
    let message = document.getElementById("message");

    // Error messages
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let websiteError = document.getElementById("websiteError");
    let messageError = document.getElementById("messageError");

    // Reset errors
    nameError.innerText = "";
    emailError.innerText = "";
    websiteError.innerText = "";
    messageError.innerText = "";

    name.classList.remove("input-error");
    email.classList.remove("input-error");
    website.classList.remove("input-error");
    message.classList.remove("input-error");

    // Name validation
    if (name.value.trim() === "") {
        nameError.innerText = "This field is required";
        name.classList.add("input-error");
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
        emailError.innerText = "A valid email address is required";
        email.classList.add("input-error");
        isValid = false;
    } else if (!emailPattern.test(email.value)) {
        emailError.innerText = "Invalid email format (e.g., example@mail.com)";
        email.classList.add("input-error");
        isValid = false;
    }

    // Website validation
    let urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
    if (website.value.trim() === "") {
        websiteError.innerText = "A valid URL is required";
        website.classList.add("input-error");
        isValid = false;
    } else if (!urlPattern.test(website.value)) {
        websiteError.innerText = "Invalid URL format (e.g., https://example.com)";
        website.classList.add("input-error");
        isValid = false;
    }

    // Message validation
    if (message.value.trim() === "") {
        messageError.innerText = "This field is required";
        message.classList.add("input-error");
        isValid = false;
    }

    return isValid;
}
