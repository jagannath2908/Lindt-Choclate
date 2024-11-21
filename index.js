// script.js

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.getElementById('main-nav');

    hamburger.addEventListener('click', function() {
        mainNav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close the menu when a link is clicked
    const navLinks = mainNav.getElementsByTagName('a');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function() {
            mainNav.classList.remove('active');
            hamburger.classList.remove('active');
        });
    }
});