document.getElementById('getWeather').addEventListener('click', function() {
    const location = document.getElementById('location').value;
    const apiKey = 'ec2097f4d864bebe76b32d53152e3064'; // Замените на ваш API ключ
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Данные не найдены');
            }
            return response.json();
        })
        .then(data => {
            const weatherResult = document.getElementById('weatherResult');
            weatherResult.innerHTML = `
                <h2>Погода в ${data.name}</h2>
                <p>Температура: ${data.main.temp} °C</p>
                <p>Описание: ${data.weather[0].description}</p>
                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Иконка погоды">
            `;
        })
        .catch(error => {
            document.getElementById('weatherResult').innerHTML = `<p class="error">${error.message}</p>`;
        });
});
