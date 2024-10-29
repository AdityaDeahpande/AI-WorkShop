document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('airQualityForm');
    const result = document.getElementById('result');
    const aqiElement = document.getElementById('aqi');
    const categoryElement = document.getElementById('category');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get input values
        const pm25 = parseFloat(document.getElementById('pm25').value);
        const pm10 = parseFloat(document.getElementById('pm10').value);
        const no2 = parseFloat(document.getElementById('no2').value);
        const so2 = parseFloat(document.getElementById('so2').value);
        const co = parseFloat(document.getElementById('co').value);
        const o3 = parseFloat(document.getElementById('o3').value);

        // Predict AQI (this is a mock prediction, not a real ML model)
        const aqi = predictAQI(pm25, pm10, no2, so2, co, o3);
        const category = getAQICategory(aqi);

        // Display result
        aqiElement.textContent = aqi.toFixed(2);
        categoryElement.textContent = `Category: ${category}`;
        result.classList.remove('hidden');
    });
});

function predictAQI(pm25, pm10, no2, so2, co, o3) {
    // This is a simplified mock prediction
    // In a real scenario, you would use a trained ML model here
    return (0.7 * pm25 + 0.3 * pm10 + 0.15 * no2 + 0.1 * so2 + 0.05 * co + 0.2 * o3) / 1.5;
}

function getAQICategory(aqi) {
    if (aqi <= 50) return "Good";
    if (aqi <= 100) return "Moderate";
    if (aqi <= 150) return "Unhealthy for Sensitive Groups";
    if (aqi <= 200) return "Unhealthy";
    if (aqi <= 300) return "Very Unhealthy";
    return "Hazardous";
}