// 1. Footer Dates
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-mod').textContent = document.lastModified;

// 1. Footer Dates
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-mod').textContent = document.lastModified;

// 2. Static Weather Data
const temperature = 25; // Celsius
const windSpeed = 8;    // km/h

// 3. Calculate Wind Chill Function (One line return)
function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
}

// 4. Logic Check
let result = "N/A";

// Condition: Temp must be <= 10 AND Wind > 4.8
if (temperature <= 10 && windSpeed > 4.8) {
    result = calculateWindChill(temperature, windSpeed).toFixed(1) + "°C";
}

// 5. Update HTML
document.getElementById('wind-chill').textContent = result;