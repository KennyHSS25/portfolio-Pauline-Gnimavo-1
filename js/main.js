// js/main.js
// Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Sticky header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Text animation (sur deux lignes)
const line1 = document.querySelector('.typed-text.line1');
const line2 = document.querySelector('.typed-text.line2');

if (line1 && line2) {
    const textLine1 = "Comprendre les besoins, anticiper les flux,";
    const textLine2 = "tisser la confiance";
    
    let index1 = 0;
    let index2 = 0;
    
    // Vider le contenu initial
    line1.innerHTML = '';
    line2.innerHTML = '';
    
    function typeLine1() {
        if (index1 < textLine1.length) {
            line1.innerHTML += textLine1.charAt(index1);
            index1++;
            setTimeout(typeLine1, 50);
        } else {
            // Commencer la deuxième ligne après un court délai
            setTimeout(typeLine2, 300);
        }
    }
    
    function typeLine2() {
        if (index2 < textLine2.length) {
            line2.innerHTML += textLine2.charAt(index2);
            index2++;
            setTimeout(typeLine2, 50);
        }
    }
    
    // Start typing animation after a short delay
    setTimeout(typeLine1, 1000);
}