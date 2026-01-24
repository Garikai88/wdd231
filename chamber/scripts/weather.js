// select HTML elements in the document
const currentTempEl = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const feelsLikeEl = document.querySelector('#feels-like');
const humidityEl = document.querySelector('#humidity');

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=-17.85861&lon=31.09504&exclude=minutely,hourly,alerts&units=metric&appid=80efd9ee0cfe0159d2e06bbd49b880b6`;



async function getWeather() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (!data.current || !data.daily) {
            document.querySelector('#current-weather').innerHTML = `<p>Unable to load weather data. Please try again later.</p>`;
            document.querySelector('#forecast').innerHTML = `<ul><li>Forecast unavailable.</li></ul>`;
            return;
        }

        // Current weather
        const temp = Math.round(data.current.temp);
        const feelsLike = Math.round(data.current.feels_like);
        const humidity = data.current.humidity;
        const description = data.current.weather[0].description;
        const iconCode = data.current.weather[0].icon;

        currentTempEl.textContent = `${temp}℃`;
        feelsLikeEl.textContent = `Feels like: ${feelsLike}℃`;
        humidityEl.textContent = `Humidity: ${humidity}%`;
        weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        captionDesc.textContent = description;

        // Forecast
        const forecastDays = data.daily.slice(1,4);
        const forecastHTML = forecastDays.map(day => {
            const weekday = new Date(day.dt * 1000).toLocaleDateString('en-ZW', {weekday: 'long'});
            return `<li>${weekday}: ${Math.round(day.temp.day)}℃</li>`
        }).join('');

        document.querySelector('#forecast ul').innerHTML = forecastHTML;
        

    } catch (error) {
        console.error('Weather fetch failed:', error);
    }
}

getWeather();

// Dark mode toggle
const toggleBtn = document.querySelector('#dark-mode-toggle');

// Loading saved preference
if (localStorage.getItem('theme') == 'dark') {
    document.body.classList.add('dark-mode');

    toggleBtn.textContent = '☀️Light Mode';
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');

        toggleBtn.textContent = '☀️Light Mode';
    } else {
        localStorage.setItem('theme', 'light');

        toggleBtn.textContent = '🌙Dark Mode';
    }
});
