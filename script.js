
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !subject || !message) {
        formMessage.textContent = "Please complete all fields. ♡";
        return;
    }

    const namePattern = /^[A-Za-z ]{2,50}$/;

    if (!namePattern.test(name)) {
        formMessage.textContent =
            "Please enter a valid name using letters only.";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.textContent =
            "Please enter a valid email address.";
        return;
    }

    function sanitizeText(text) {
        return text.replace(/[&<>"']/g, function (character) {
            const entities = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            };

            return entities[character];
        });
    }

    const safeName = sanitizeText(name);

    formMessage.textContent =
        "Thank you, " + safeName +
        "! Your form has been checked successfully. ♡";


    contactForm.reset();
});
