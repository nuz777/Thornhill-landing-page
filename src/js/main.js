// =========================================
// THORNHILL LANDING - SIMPLE JS
// Just enough for the carousel and mobile menu
// =========================================

document.addEventListener('DOMContentLoaded', function() {

    // ----- MOBILE MENU TOGGLE -----
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('open');
        // Simple animation for hamburger
        const spans = menuToggle.querySelectorAll('span');
        if (mainNav.classList.contains('open')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close menu when clicking a link
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            mainNav.classList.remove('open');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });


    // ----- SIMPLE SCROLL ANIMATION -----
    // Add a simple class when sections come into view
    const sections = document.querySelectorAll('section');
    
    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.85;
        
        sections.forEach(function(section) {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < triggerBottom) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }

    // Initialize sections with slight hidden state for animation
    sections.forEach(function(section) {
        if (!section.classList.contains('hero')) {
            section.style.opacity = '0.9';
            section.style.transform = 'translateY(10px)';
            section.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        }
    });

    window.addEventListener('scroll', checkScroll);
    checkScroll(); // Run once on load

});
