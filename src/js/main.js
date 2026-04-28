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

});
