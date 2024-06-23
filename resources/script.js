document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!validateEmail(email)) {
        showMessage("Invalid email address.", "error");
        return;
    }

    if (message.length < 20) {
        showMessage("Message must be at least 20 characters long.", "error");
        return;
    }

    emailjs.sendForm('service_mv1odnv', 'template_vsfzuhq', this)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showMessage("Message sent successfully!", "success");

            // Reset the form inputs
            document.getElementById('contactForm').reset();
        }, function(error) {
            console.log('FAILED...', error);
            showMessage("Failed to send the message.", "error");
        });
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showMessage(message, type) {
    const messageDiv = document.getElementById('responseMessage');
    messageDiv.style.display = 'block';
    messageDiv.textContent = message;

    // Remove any existing classes
    messageDiv.classList.remove('success', 'error');

    // Apply styling based on the type of message
    if (type === 'success') {
        messageDiv.classList.add('success');
    } else if (type === 'error') {
        messageDiv.classList.add('error');
    }

    // Hide the message after 5 seconds
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}



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

    document.addEventListener("DOMContentLoaded", function() {
        const menuButton = document.querySelector('.menu-main');
        const menu = document.querySelector('.menu');
    
        // Add click event listener to toggle the menu visibility
        menuButton.addEventListener('click', function() {
          menu.classList.toggle('active');
        });
      });
