// Initialize EmailJS with your User ID
(function(){
    emailjs.init("annsiona2004@gmail.com"); // Your actual User ID
})();

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Send email using EmailJS
    emailjs.sendForm('service_12476ju', 'template_nsagu48', this)
        .then(function() {
            alert('Your message has been sent!');
            // Reset the form after submission
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Oops! Something went wrong, please try again.');
            console.log('Error:', error);
        });
});
