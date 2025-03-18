document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (email === "" || password === "") {
            showAlert("Please fill in all fields!", "error");
            return;
        }

        if (!validateEmail(email)) {
            showAlert("Invalid email format!", "error");
            return;
        }

        // Simulate login success (Replace this with actual authentication logic)
        showAlert("Login Successful!", "success");

        setTimeout(() => {
            window.location.href = "dashboard.html"; // Redirect after login
        }, 1500);
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function showAlert(message, type) {
        const alertBox = document.getElementById("alert-box");
        alertBox.textContent = message;
        alertBox.className = `alert ${type}`;
        alertBox.style.display = "block";

        setTimeout(() => {
            alertBox.style.display = "none";
        }, 2000);
    }
});
