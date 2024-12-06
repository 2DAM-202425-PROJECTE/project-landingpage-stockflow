// Inicializa EmailJS con tu User ID real
(function () {
    emailjs.init("myLmsBtQsqLpXEpLz"); // Sustituye "TU_USER_ID" con tu User ID real de EmailJS
})();

// Obtén elementos del DOM
const emailInput = document.getElementById("emailInput");
const subscribeButton = document.getElementById("subscribeButton");
const confirmationMessage = document.getElementById("confirmationMessage");

// Añade evento al botón
subscribeButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Validar que el correo no esté vacío
    const emailValue = emailInput.value.trim();
    if (!emailValue) {
        confirmationMessage.textContent = "Si us plau, introdueix un correu electrònic vàlid.";
        confirmationMessage.classList.remove("opacity-0");
        confirmationMessage.classList.add("text-red-500");
        return;
    }

    // Envía el correo con EmailJS
    emailjs.send("service_6qpo055", "template_198caza", {
        email: emailValue  // Aquí estás pasando el correo electrónico recibido
    }).then(
        function (response) {
            console.log("SUCCESS!", response.status, response.text);
            // Mostrar mensaje de éxito
            confirmationMessage.textContent = "Gràcies! Hem rebut el teu email.";
            confirmationMessage.classList.remove("opacity-0");
            confirmationMessage.classList.add("text-green-500");

            // Limpia el campo de entrada
            emailInput.value = "";
        },
        function (error) {
            console.error("FAILED...", error);
            // Mostrar mensaje de error
            confirmationMessage.textContent = "Hi ha hagut un error. Torna-ho a intentar.";
            confirmationMessage.classList.remove("opacity-0");
            confirmationMessage.classList.add("text-red-500");
        }
    );
});
