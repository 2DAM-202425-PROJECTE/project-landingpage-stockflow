// Seleccionamos los elementos del DOM
const emailInput = document.getElementById('emailInput');
const subscribeButton = document.getElementById('subscribeButton');
const confirmationMessage = document.getElementById('confirmationMessage');

// Evento para gestionar el clic en el botón de suscripción
subscribeButton.addEventListener('click', async (e) => {
    e.preventDefault(); // Evitar que la página se recargue
    
    // Validar que el campo de email no esté vacío
    const email = emailInput.value.trim();
    if (!validateEmail(email)) {
        confirmationMessage.textContent = 'Si us plau, introdueix una adreça de correu electrònic vàlida.';
        confirmationMessage.classList.remove('opacity-0');
        confirmationMessage.classList.add('text-red-400');
        return;
    }

    // Mostrar mensaje de envío
    confirmationMessage.textContent = 'Enviant la teva sol·licitud...';
    confirmationMessage.classList.remove('text-red-400', 'opacity-0');
    confirmationMessage.classList.add('text-yellow-400');

    try {
        // Enviar datos al backend
        const response = await fetch('https://api.stockflow.com/newsletter/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        if (!response.ok) {
            throw new Error('Error en la subscripció. Torna-ho a intentar.');
        }

        // Respuesta exitosa
        confirmationMessage.textContent = `Gràcies per subscriure't al nostre newsletter, ${email}!`;
        confirmationMessage.classList.remove('text-yellow-400');
        confirmationMessage.classList.add('text-green-400');
        emailInput.value = ''; // Limpiar el campo de email
    } catch (error) {
        // Error en el envío
        confirmationMessage.textContent = 'Hi ha hagut un problema. Si us plau, torna-ho a intentar.';
        confirmationMessage.classList.remove('text-yellow-400');
        confirmationMessage.classList.add('text-red-400');
    }
});

// Función para validar emails
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
