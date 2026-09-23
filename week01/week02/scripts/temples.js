/* ============================================
   TEMPLE ALBUM — JavaScript
   ============================================ */

// --- Dynamic Footer: Copyright Year & Last Modified ---
document.addEventListener('DOMContentLoaded', () => {

    // Current year
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Last modified date of the HTML file
    const modSpan = document.getElementById('last-modified');
    if (modSpan) {
        const lastMod = document.lastModified;
        // Format: MM/DD/YYYY HH:MM:SS
        const dateObj = new Date(lastMod);
        const formatted = dateObj.toLocaleString('en-US', {
            month: '2-digit',
            day: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        });
        modSpan.textContent = formatted;
    }

    // --- Hamburger Menu Toggle ---
    const hamburgerBtn = document.querySelector('.hamburger');
    const navMenu      = document.querySelector('.main-nav');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');

            // Toggle symbol between  and ✕
            if (navMenu.classList.contains('active')) {
                hamburgerBtn.innerHTML = '&#10005;';   // ✕ close icon
                hamburgerBtn.setAttribute('aria-label', 'Close navigation menu');
            } else {
                hamburgerBtn.innerHTML = '&#9776;';    // ☰ hamburger icon
                hamburgerBtn.setAttribute('aria-label', 'Toggle navigation menu');
            }
        });
    }
});