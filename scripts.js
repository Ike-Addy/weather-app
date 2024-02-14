const getWeather = document.getElementById('get-weather')

function getWeather () {
    const apiKey = '1dd3d7bbf142783466267003fbc6326e';
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = 
    `https://api.openweathermap.org/
    data/2.5/weather?q=${city}&appid=${apiKey}`;
    const forecastUrl = 
    `https://api.openweathermap.org/
    data/2.5/forecast?q=${city}&appid=${apiKey}`;

}