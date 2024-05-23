const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.Weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind-speed');
const location_not_find = document.querySelector('.location-not-find');
const wether_body = document.querySelector('.wether-body');


async function checkWeather(city){
    const api_key = "307dbf4a02b4af1c13292e0119632f14";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());

    // console.log(weather_data);


    if(weather_data.cod==='404'){
        location_not_find.style.display = "flex";
        wether_body.style.display = "none";
        console.log("error");
        return;
    }
    else{
        location_not_find.style.display = "none";
        wether_body.style.display = "flex";
    }

    temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;

    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind.innerHTML = `${weather_data.wind.speed}KM/H`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src ="img/cloud.png";
            break
        case 'Clear':
            weather_img.src ="img/clear.png";
            break
        case 'Rain':
            weather_img.src ="img/rain.png";
            break
        case 'Mist':
            weather_img.src ="img/mist.png";
            break
        case 'Snow':
            weather_img.src ="img/snow.png";
    }
}
searchBtn.addEventListener('click', () => {
checkWeather(inputBox.value);
});