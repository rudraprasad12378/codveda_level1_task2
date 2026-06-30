//selecting elements//
const form = document.getElementById("registerForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

const togglePassword = document.getElementById("togglePassword");
//=======================================
// function to toggle password visibility
// =======================================
togglePassword.addEventListener("click", () => {

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        passwordInput.type = "password";
        togglePassword.classList.replace("fa-eye-slash", "fa-eye");
    }

});
//==========================
// function to validate form
//===========================
form.addEventListener("submit", function (e) {

    e.preventDefault();

    let isValid = true;

    // Clear previous messages
    document.querySelectorAll(".error").forEach(error => error.textContent = "");

    document.querySelectorAll("input").forEach(input => {
        input.classList.remove("error-input", "success");
    });

    // =========================
    // Name Validation
    // =========================

    if (nameInput.value.trim() === "") {

        showError(nameInput, "Name is required");
        isValid = false;

    } else {

        showSuccess(nameInput);

    }

    // =========================
    // Email Validation
    // =========================

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!emailPattern.test(emailInput.value.trim())) {

        showError(emailInput, "Enter a valid email");
        isValid = false;

    } else {

        showSuccess(emailInput);

    }

    // =========================
    // Phone Validation
    // =========================

    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phoneInput.value.trim())) {

        showError(phoneInput, "Enter a valid 10-digit phone number");
        isValid = false;

    } else {

        showSuccess(phoneInput);

    }

    // =========================
    // Password Validation
    // =========================

    if (passwordInput.value.length < 8) {

        showError(passwordInput, "Password must be at least 8 characters");
        isValid = false;

    } else {

        showSuccess(passwordInput);

    }

    // =========================
    // Success
    // =========================

    if (isValid) {

        alert("🎉 Account Created Successfully!");

        form.reset();

        document.querySelectorAll("input").forEach(input => {
            input.classList.remove("success");
        });

    }

});
//==========================
//helpers functions to show error and success
//===========================
function showError(input, message) {

    const inputBox = input.closest(".input-box");
    const error = inputBox.querySelector(".error");

    error.textContent = message;

    input.classList.add("error-input");
}

function showSuccess(input) {

    input.classList.add("success");

}