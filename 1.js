const apiKey = '21bf9e4cbf6dad1e8dba7d562d6fe6e9';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q=';

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status === 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }
    else{
        var data = await response.json();

    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + '°c';
    document.querySelector('.wind').innerHTML =data.wind.speed + "km/h";
    document.querySelector('.humidity').innerHTML =data.main.humidity + '%';
    document.querySelector('.country').innerHTML= data.sys.country;

    if(data.weather[0].main == 'Clouds'){
        image.src = 'images/clouds.png'
    }
    else if(data.weather[0].main == 'Clear'){
    image.src = 'images/clear.png' 
}
    else if(data.weather[0].main == 'Rain'){
    image.src = 'images/rain.png'
}
    else if(data.weather[0].main == 'Mist'){
    image.src = 'images/clouds.png'
}
else if(data.weather[0].main == 'Drizzle'){
    image.src = 'images/drizzle.png'
}
else if(data.weather[0].main == 'Snow'){
    image.src = 'images/snow.png'
}    
    document.querySelector('.weather').style.display = 'block'
    document.querySelector('.error').style.display = 'none';
    }

    
}

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const image = document.querySelector('.weather-icon')

searchBtn.addEventListener('click', ()=>{
    
    checkWeather(searchBox.value)
    
})