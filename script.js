document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("mode-toggle");

    toggleButton.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");

        // Save the current mode in localStorage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    // Load the saved theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.add("light-mode");
    }
});
// script.js

document.getElementById('mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});



document.addEventListener('DOMContentLoaded', (event) => {
    const modeToggle = document.getElementById('mode-toggle');
    const body = document.body;

    modeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            modeToggle.textContent = 'Light Mode';
        } else {
            modeToggle.textContent = 'Dark Mode';
        }
    });
});





const roles = ["Full Stack Developer.", "Machine Learning Engineer.", "UI/UX Designer."];
let currentRoleIndex = 0;
let currentCharIndex = 0;
const typingSpeed = 100; // Milliseconds per character
const erasingSpeed = 50; // Milliseconds per character
const delayBetweenRoles = 2000; // Milliseconds before starting the next role
const roleElement = document.getElementById("role");

function type() {
    if (currentCharIndex < roles[currentRoleIndex].length) {
        roleElement.textContent = roles[currentRoleIndex].substring(0, currentCharIndex + 1) + '|';
        currentCharIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetweenRoles);
    }
}

function erase() {
    if (currentCharIndex > 0) {
        roleElement.textContent = roles[currentRoleIndex].substring(0, currentCharIndex - 1) + '|';
        currentCharIndex--;
        setTimeout(erase, erasingSpeed);
    } else {
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        setTimeout(type, typingSpeed);
    }
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", () => {
    if (roles.length) {
        type();
    }
});
