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

const startDate = new Date('2024-06-13');
  
    function calculateDaysSince(date) {
        const now = new Date();
        const timeDifference = now - date;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        return daysDifference;
    }


    function updateCounter() {
        const daysCounterElement = document.getElementById('daysCounter');
        const daysSince = calculateDaysSince(startDate);
        daysCounterElement.textContent = daysSince;
    }

    updateCounter();