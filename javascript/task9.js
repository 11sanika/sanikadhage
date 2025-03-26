document.addEventListener("DOMContentLoaded", function () {

    // Handle Registration Form Submission
    const form = document.getElementById("registrationForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let users = JSON.parse(localStorage.getItem("users")) || [];

            let user = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                contact: document.getElementById("contact").value,
                address: document.getElementById("address").value,
            };

            users.push(user);
            localStorage.setItem("users", JSON.stringify(users));

            alert("User registered successfully!");
            form.reset();
        });
    }

    // Display Users in View Page
    const userTableBody = document.getElementById("userTableBody");
    if (userTableBody) {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        users.forEach(user => {
            let row = `<tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.contact}</td>
                <td>${user.address}</td>
            </tr>`;
            userTableBody.innerHTML += row;
        });
    }
});
