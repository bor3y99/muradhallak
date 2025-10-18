document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!validateEmail(email)) {
        showMessage("Invalid email address.", "error");
        return;
    }

    // Show "Verifying email..." message
    showLoadingMessage("Verifying email, please be patient");

    // Verify email existence
    const isReal = await verifyEmailExists(email);

    clearInterval(loadingInterval); // stop the dots animation

    if (!isReal) {
        showMessage("That email address doesn't exist or can't receive mail.", "error");
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
    const re = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return re.test(String(email).toLowerCase());
}

// Function to verify real emails
async function verifyEmailExists(email) {
    const apiKey = "087bf84f4b6692b16993f94b078ba987"; // Replace with your API key
    const url = `https://apilayer.net/api/check?access_key=${apiKey}&email=${encodeURIComponent(email)}&smtp=1&format=1`;


    try {
        const response = await fetch(url);
        const data = await response.json();

        // Returns true only if format, domain, and SMTP check are valid
        return data.format_valid && data.mx_found && data.smtp_check;
    } catch (error) {
        console.error("Email verification error:", error);
        return false;
    }
}



let loadingInterval;

function showLoadingMessage(baseMessage) {
    const messageDiv = document.getElementById('responseMessage');
    let dots = 0;
    messageDiv.style.display = 'block';
    messageDiv.classList.remove('success', 'error', 'info');
    messageDiv.classList.add('info');

    // Clear any previous interval
    clearInterval(loadingInterval);

    loadingInterval = setInterval(() => {
        dots = (dots + 1) % 4; // cycles 0 → 3
        messageDiv.textContent = baseMessage + '.'.repeat(dots);
    }, 500); // update every 500ms
}

function showMessage(message, type, autoHide = true) {
    const messageDiv = document.getElementById('responseMessage');
    messageDiv.style.display = 'block';
    messageDiv.textContent = message;

    // Remove any existing classes
    messageDiv.classList.remove('success', 'error', 'info');

    // Apply styling based on the type of message
    if (type === 'success') {
        messageDiv.classList.add('success');
    } else if (type === 'error') {
        messageDiv.classList.add('error');
    } else if (type === 'info') {
        messageDiv.classList.add('info');
    }

    // Only hide if autoHide is true
    if (autoHide) {
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }
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
