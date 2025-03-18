document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let alertBox = document.getElementById("alert");

    // Validation checks
    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        showAlert("All fields are required!", "error");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        showAlert("Enter a valid email address!", "error");
        return;
    }

    if (password.length < 6) {
        showAlert("Password must be at least 6 characters long!", "error");
        return;
    }

    if (password !== confirmPassword) {
        showAlert("Passwords do not match!", "error");
        return;
    }

    // Success message
    showAlert("Signup successful! Redirecting...", "success");

    // Simulate backend call
    setTimeout(() => {
        window.location.href = "login.html"; // Redirect to login page
    }, 2000);
});

// Function to display alert messages
function showAlert(message, type) {
    let alertBox = document.getElementById("alert");
    alertBox.innerText = message;
    alertBox.className = "alert " + type;
    alertBox.style.display = "block";

    setTimeout(() => {
        alertBox.style.display = "none";
    }, 3000);
}
