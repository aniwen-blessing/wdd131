// Populate dynamic footer dates
document.getElementById('copyrightYear').textContent = new Date().getFullYear();

// Get and format the last modified date
const lastMod = document.lastModified;
document.getElementById('lastModified').textContent = lastMod;