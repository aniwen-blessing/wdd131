/**
 * Madagascar Travel Guide - JavaScript Functionality
 */

// Weather data for Madagascar
const weatherData = {
    temperature: 10,
    windSpeed: 5,
    unit: 'metric'
};

/**
 * Calculate wind chill factor
 */
function calculateWindChill(temp, windSpeed, unit = 'metric') {
    if (unit === 'metric') {
        if (temp > 10 || windSpeed <= 4.8) {
            return 'N/A';
        }
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
    } else {
        if (temp > 50 || windSpeed <= 3) {
            return 'N/A';
        }
        return 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16);
    }
}

/**
 * Update wind chill display
 */
function updateWindChill() {
    const windChillElement = document.getElementById('wind-chill');
    const result = calculateWindChill(
        weatherData.temperature,
        weatherData.windSpeed,
        weatherData.unit
    );
    
    if (result === 'N/A') {
        windChillElement.textContent = 'N/A';
    } else {
        const roundedResult = Math.round(result * 10) / 10;
        windChillElement.textContent = `${roundedResult} °C`;
    }
}

/**
 * Update footer with current year and last modified date
 */
function updateFooter() {
    // Current year
    const currentYearElement = document.getElementById('current-year');
    currentYearElement.textContent = new Date().getFullYear();
    
    // Last modified date
    const lastModifiedElement = document.getElementById('last-modified');
    const lastModified = new Date(document.lastModified);
    const options = { 
        year: 'numeric', 
        month: '2-digit', 
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };
    lastModifiedElement.textContent = lastModified.toLocaleDateString('en-US', options);
}

/**
 * Initialize the page
 */
function init() {
    updateWindChill();
    updateFooter();
    console.log('Madagascar page initialized');
}

document.addEventListener('DOMContentLoaded', init);