// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const feelsLikeEl = document.querySelector('#feels-like');
const humidityEl = document.querySelector('#humidity');

// We build the API URL for Trier, Germany
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&units=metric&appid=268a23634cafa30fc831e320ce389202';

// Async function to fetch weather data
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults(data); // call helper function to display results

        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error("API fetch error:", error);
    }
}

// Helper function will display results on the web page
function displayResults(data) {
    // The temperature
    currentTemp.textContent = `${data.main.temp}℃`;

    // The weather description
    captionDesc.textContent = data.weather[0].description;

    // Weather icon
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    weatherIcon.setAttribute('src', iconUrl);
    weatherIcon.setAttribute('alt', data.weather[0].description);

    // Optional extras
    if (feelsLikeEl) {
        feelsLikeEl.textContent = `${data.main.feels_like} ℃`;

    }
    if (humidityEl) {
        humidityEl.textContent = `${data.main.humidity}%`;
    }

    // Console logs for testing
    console.log(`City: ${data.name}`);
    console.log(`Temperature: ${data.main.temp} ℃`);
    console.log(`Feels like: ${data.main.feels_like} ℃`);
    console.log(`Humidity: ${data.main.humidity}%`);
    console.log(`Condition: ${data.weather[0].description}`);
    console.log(`Icon URL: ${iconUrl}`);
}

document.querySelector('#toggle-dark').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Run after DOM is loaded
window.addEventListener("DOMContentLoaded", apiFetch);

