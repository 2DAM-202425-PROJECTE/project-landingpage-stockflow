// Inicializa EmailJS con tu User ID
(function () {
    emailjs.init("myLmsBtQsqLpXEpLz");  // Sustituye con tu User ID de EmailJS
    
})();

// Obtén el formulario y los elementos de entrada
const contactForm = document.getElementById("contact-form");
const confirmationMessage = document.getElementById("confirmationMessage");

// Evento al enviar el formulario
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Recoger los valores de los campos
    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje").value;

    // Verifica que los campos no estén vacíos
    if (!nombre || !correo || !mensaje) {
        confirmationMessage.textContent = "Por favor, completa todos los campos.";
        confirmationMessage.style.color = "red";
        return;
    }

    // Envía el formulario a EmailJS
    emailjs.send("service_6qpo055", "template_fhxzuvr", {
        nombre: nombre,
        correo: correo,
        mensaje: mensaje
    })
    .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);
        confirmationMessage.textContent = "¡Gracias! Tu mensaje ha sido enviado.";
        confirmationMessage.style.color = "green";
        // Limpia el formulario
        
    }, function (error) {
        console.error("FAILED...", error);
        confirmationMessage.textContent = "Hubo un error al enviar el mensaje. Intenta nuevamente.";
        confirmationMessage.style.color = "red";
    });
    contactForm.reset();
});