const weatherData = {
    temperature: 10,
    windSpeed: 5,
    unit: 'metric'
};

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

function updateWindChill() {
    const windChillElement = document.getElementById('wind-chill');
    const result = calculateWindChill(weatherData.temperature, weatherData.windSpeed, weatherData.unit);

    if (result === 'N/A') {
        windChillElement.textContent = 'N/A';
    } else {
        const roundedResult = Math.round(result * 10) / 10;
        windChillElement.textContent = `${roundedResult} °C`;
    }
}

function updateFooter() {
    document.getElementById('current-year').textContent = new Date().getFullYear();

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
    document.getElementById('last-modified').textContent = lastModified.toLocaleDateString('en-US', options);
}

function init() {
    updateWindChill();
    updateFooter();
}

document.addEventListener('DOMContentLoaded', init);