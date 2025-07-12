// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // prevent page refresh

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const responsePara = document.getElementById('formResponse');

    if (name && email && message) {
        responsePara.textContent = `Thank you, ${name}! Your message has been sent.`;
        responsePara.style.color = 'green';

        // Optionally, reset the form
        document.getElementById('contactForm').reset();
    } else {
        responsePara.textContent = 'Please fill in all fields.';
        responsePara.style.color = 'red';
    }
});