// Footer dates
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-mod').textContent = document.lastModified;

// Static weather values
const temperature = 8;
const windSpeed = 15;

// Wind chill calculation (ONE line)
function calculateWindChill(temp, wind) {
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
}

// Conditional logic
let windChillResult = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChillResult = calculateWindChill(temperature, windSpeed).toFixed(1) + "°C";
}

// Display result
document.getElementById('wind-chill').textContent = windChillResult;