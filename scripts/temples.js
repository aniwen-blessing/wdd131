// temples.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Navigation Toggle ---
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.main-nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            // Toggle the 'active' class to show/hide menu
            nav.classList.toggle('active');
            
            // Optional: Toggle a class on the button for animation
            hamburger.classList.toggle('open');
        });
    }

    // Close menu when a link is clicked (better UX for single-page anchors)
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                nav.classList.remove('active');
                hamburger.classList.remove('open');
            }
        });
    });

    // --- Dynamic Footer Content ---
    
    // 1. Set Current Year
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. Set Last Modification Date
    const lastModSpan = document.getElementById('lastModified');
    if (lastModSpan) {
        // document.lastModified returns a string like "09/25/2026 14:30:00"
        lastModSpan.textContent = document.lastModified;
    }
});