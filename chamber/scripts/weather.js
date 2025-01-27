const url = 'https://api.openweathermap.org/data/2.5/weather?lat=16.77&lon=-3.0&appid=2686992686c499b3bb85a5b7f6343bd1&units=imperial';
const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=16.77&lon=-3.0&appid=2686992686c499b3bb85a5b7f6343bd1&units=imperial';

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const forecast1 = document.querySelector('#day1');
const forecast2 = document.querySelector('#day2');
const forecast3 = document.querySelector('#day3');

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            displayResults(data);
        } else {
            throw error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


async function forecastFetch() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        } else {
            throw error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}


function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function displayResults(data) {

    let icon = document.createElement('img');
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', 'Icon indicating the current weather in said city.');
    captionDesc.textContent = capitalize(desc);

    weatherIcon.appendChild(icon);
}

function displayForecast(data) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    for (let i = 1; i <= 3; i++) {
        const forecastDay = new Date(data.list[i * 6].dt_txt);
        console.log(forecastDay);
        const forecastDayIndex = forecastDay.getDay();
        const forecastDayName = daysOfWeek[forecastDayIndex];
        if (i === 1) {
            forecast1.innerHTML = `Tomorrow: ${Math.floor(data.list[i * 8].main.temp)}&deg;F`;
        } else if (i === 2) {
            forecast2.innerHTML = `${forecastDayName}: ${Math.floor(data.list[i * 8].main.temp)}&deg;F`;
        } else {
            forecast3.innerHTML = `${forecastDayName}: ${Math.floor(data.list[i * 8].main.temp)}&deg;F`;
        }
    }
}


apiFetch();
forecastFetch();