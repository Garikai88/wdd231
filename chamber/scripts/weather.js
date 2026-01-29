
// API setup
const apiKey ='268a23634cafa30fc831e320ce389202';
const lat = -17.85861;// Harare latitude
const lon = 31.09504; // Harare longitude

const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

// Select DOM elements
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-desc');
const feelsLikeEl = document.querySelector('#feels-like');
const humidityEl = document.querySelector('#humidity');

// Async function to fetch current weather data
async function apiFetch() {
    try {
        const response = await fetch(currentUrl);
        if (response.ok) {
            const data = await response.json();
            console.log('Current weather:', data); // this is for testing the call
            displayResults(data); // call helper function to display results

        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error("API fetch error:", error);
    }
}

// Helper function to display results
function displayResults(data) {
    const iconCode = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    // Safe DOM updates with checks
    if (currentTemp) currentTemp.textContent = `${Math.round(data.main.temp)}℃`;
    if (captionDesc) captionDesc.textContent = data.weather[0].description;
    if (weatherIcon) {
        weatherIcon.src = iconUrl;
        weatherIcon.alt = data.weather[0].description;
    }
    if (feelsLikeEl) feelsLikeEl.textContent =`Feels like: ${Math.round(data.main.feels_like)}℃`;
    if (humidityEl) humidityEl.textContent = `Humidity: ${data.main.humidity}%`;

    // Debugging logs (optional)
    console.log(`Temp: ${data.main.temp}`);
    console.log(`Feels like: ${data.main.feels_like}`);
    console.log(`Humidity: ${data.main.humidity}`);
    console.log(`Condition: ${data.weather[0].description}`);
}

// Forecast fetch
async function fetchForecast() {
    const apiKey = '268a23634cafa30fc831e320ce389202';
    const lat = -17.8252;
    const lon = 31.0335;
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        const forecastList = document.querySelector('.forecast-list');
        if (!forecastList) return;
        forecastList.innerHTML = '';

        // Filter for 12:00pm entries for the next 3 days
        const dailyData = data.list.filter(item => item.dt_txt.includes('12:00:00')).slice(0, 3);

        dailyData.forEach(day => {
            const date = new Date(day.dt_txt);
            const weekday = date.toLocaleDateString('en-ZW', { weekday: 'long' });
            const iconCode = day.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
            const temp = Math.round(day.main.temp);

            const li = document.createElement('li');
            li.innerHTML = `
            <p class="day">${weekday}</p>
            <img src="${iconUrl}" alt="${day.weather[0].description}">
            <p class="temp">${temp}℃</p>
            `;
            forecastList.appendChild(li);
        });
    
    } catch (error) {
        console.error('Forecast fetch failed:', error);
    }
}

// Run both on page load
window.addEventListener("DOMContentLoaded", () => {
    apiFetch(); // Current weather
    fetchForecast(); // 3 day forecast
})

const menuToggle = document.getElementById('menu-toggle');
const navList = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
});

// Dark mode toggle
const toggleBtn = document.querySelector('#dark-mode-toggle');
if (toggleBtn) {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        toggleBtn.textContent = '☀️Light Mode';
    } else {
        toggleBtn.textContent = '🌙Dark Mode';
    }

    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            toggleBtn.textContent = '☀️Light Mode';

        } else {
            localStorage.setItem('theme', 'light');
            toggleBtn.textContent ='🌙Dark Mode';
        }
    });
    
}
