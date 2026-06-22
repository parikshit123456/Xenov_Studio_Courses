// ==============================
// Blender Masterclass
// script.js
// ==============================

document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");
    const submitBtn = document.querySelector(".submit-btn");

    const nameInput = document.querySelector('input[name="Name"]');
    const stateInput = document.querySelector('input[name="State"]');
    const emailInput = document.querySelector('input[name="Email"]');
    const phoneInput = document.querySelector('input[name="Phone"]');

    // -----------------------------
    // Allow only numbers in Phone
    // -----------------------------
    phoneInput.addEventListener("input", () => {
        phoneInput.value = phoneInput.value.replace(/\D/g, "");
    });

    // -----------------------------
    // Form Validation
    // -----------------------------
    form.addEventListener("submit", function (e) {

        const name = nameInput.value.trim();
        const state = stateInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();

        if (name.length < 3) {
            alert("Please enter a valid name.");
            nameInput.focus();
            e.preventDefault();
            return;
        }

        if (state.length < 2) {
            alert("Please enter your state.");
            stateInput.focus();
            e.preventDefault();
            return;
        }

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid Email ID.");
            emailInput.focus();
            e.preventDefault();
            return;
        }

        if (phone.length !== 10) {
            alert("Phone number must be exactly 10 digits.");
            phoneInput.focus();
            e.preventDefault();
            return;
        }

        // Loading Animation
        submitBtn.disabled = true;
        submitBtn.innerHTML = "Registering...";

    });

    // -----------------------------
    // Smooth Scroll for Buttons
    // -----------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            document.querySelector(this.getAttribute("href"))
                .scrollIntoView({
                    behavior: "smooth"
                });

        });

    });

});