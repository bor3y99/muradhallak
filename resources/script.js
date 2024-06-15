// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_mv1odnv', 'template_vsfzuhq', this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert("Message sent successfully!");
        }, function(error) {
            console.log('FAILED...', error);
            alert("Failed to send the message.");
        });
});
