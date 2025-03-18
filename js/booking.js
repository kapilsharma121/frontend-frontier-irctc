document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    let from = document.getElementById("from").value.trim();
    let to = document.getElementById("to").value.trim();
    let date = document.getElementById("date").value;
    let passengers = document.getElementById("passengers").value;
    let trainClass = document.getElementById("class").value;
    let alertBox = document.getElementById("alert");

    // Validation
    if (from === "" || to === "" || date === "" || passengers === "" || trainClass === "") {
        showAlert("All fields are required!", "error");
        return;
    }

    if (from.toLowerCase() === to.toLowerCase()) {
        showAlert("Departure and Destination stations cannot be the same!", "error");
        return;
    }

    if (passengers <= 0) {
        showAlert("Enter a valid number of passengers!", "error");
        return;
    }

    // Success message
    showAlert("Booking Confirmed! 🎟️", "success");

    // Simulate ticket processing
    setTimeout(() => {
        alert("Your ticket has been booked successfully!");
        window.location.href = "index.html"; // Redirect to homepage
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
