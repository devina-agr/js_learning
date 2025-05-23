const apiKey="86ce189b56633d5f1803a003fa3a33bf";
const apiUrl="api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.getElementById('search-box');
const searchBtn=document.getElementById('search-btn');


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);

    document.getElementsByClassName('location').innerHTML=data.name;
    document.getElementsByClassName('temperature').innerHTML=Math.round(data.main.temp)+ ' °C';
    document.getElementsByClassName('humidity').innerText=data.main.humidity+ ' %';
    document.getElementsByClassName('speed').innerText=data.main.speed+ ' km/h';
}

searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value);
});