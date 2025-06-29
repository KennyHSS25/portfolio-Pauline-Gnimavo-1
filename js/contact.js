// Contact form submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Create form data object
            const formData = {
                name: name,
                email: email,
                message: message
            };
            
            // Envoi réel de l'email (simulé ici)
            // Dans une application réelle, vous utiliseriez un service comme EmailJS
            // ou un backend pour envoyer l'email
            console.log('Email envoyé à paulinegnimavo24@gmail.com:', formData);
            
            // Simulate form submission
            setTimeout(() => {
                contactForm.reset();
                successMessage.style.display = 'block';
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            }, 1000);
        });
    }
});