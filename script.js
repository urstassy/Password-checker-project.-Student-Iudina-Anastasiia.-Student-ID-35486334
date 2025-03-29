document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const strengthMessage = document.getElementById("strength-message");

    passwordInput.addEventListener("input", function () {
        const password = passwordInput.value;
        const strength = checkPasswordStrength(password);
        
        strengthMessage.textContent = strength.message;
        strengthMessage.className = strength.class;
    });

    function checkPasswordStrength(password) {
        if (password.length < 6) {
            return { message: "Too short!", class: "weak" };
        }

        let strengthPoints = 0;

        if (password.length >= 8) strengthPoints++;
        if (/[A-Z]/.test(password)) strengthPoints++;
        if (/[a-z]/.test(password)) strengthPoints++;
        if (/[0-9]/.test(password)) strengthPoints++;
        if (/[^A-Za-z0-9]/.test(password)) strengthPoints++;

        if (strengthPoints <= 2) {
            return { message: "Weak password!", class: "weak" };
        } else if (strengthPoints === 3 || strengthPoints === 4) {
            return { message: "Medium strength!", class: "medium" };
        } else {
            return { message: "Strong password!", class: "strong" };
        }
    }
});
