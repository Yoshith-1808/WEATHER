function getWeather() {
    const apiKey = '8453ba7a677e8ac7f473c6d79ff498ee'; // Replace with your OpenWeatherMap API key
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => console.log('Error fetching weather data:', error));
}

function displayWeather(data) {
    const cityElement = document.getElementById('city');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');

    cityElement.textContent = `City: ${data.name}`;
    temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
    descriptionElement.textContent = `Weather: ${data.weather[0].description}`;
}
