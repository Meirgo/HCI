// script.js
document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("inputField");
    const copyButton = document.getElementById("copyButton");

    let capsLockEnabled = false;

    // Function to handle button clicks
    function handleButtonClick(value) {
        switch (value) {
            case "Backspace":
                // Handle Backspace
                inputField.value = inputField.value.slice(0, -1);
                break;
            case "Caps Lock":
                // Toggle Caps Lock
                capsLockEnabled = !capsLockEnabled;
                updateCapsLockStyle();
                break;
            case "Tab":
                // Handle Tab
                inputField.value += "    "; // Add four spaces for Tab
                break;
            case "Shift":
                // Handle Shift
                // You can implement custom behavior for Shift if needed
                break;
            case "Enter":
                // Handle Enter
                inputField.value += "\n";
                break;
            case "Space":
                // Handle Space
                inputField.value += " ";
                break;
            default:
                // Append other button values to the input field
                inputField.value += capsLockEnabled ? value.toUpperCase() : value.toLowerCase();
        }
    }

    // Function to update Caps Lock button style
    function updateCapsLockStyle() {
        const capsLockButton = document.querySelector(".caps");
        if (capsLockEnabled) {
            capsLockButton.classList.add("active");
        } else {
            capsLockButton.classList.remove("active");
        }
    }

    // Function to handle copy button click
    copyButton.addEventListener("click", function () {
        copyToClipboard(inputField.value);
    });

    // Function to copy text to clipboard
    function copyToClipboard(text) {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
    }

    // Add click event listeners to all buttons
    const buttons = document.querySelectorAll(".key");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const buttonValue = this.textContent;
            handleButtonClick(buttonValue);
        });
    });
});

