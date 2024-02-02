//https://api.openweathermap.org/data/2.5/weather?q=germany&appid=8a3c9678b6b0775a4af382a52888b904&units=metric(previous)


//https://api.openweathermap.org/data/2.5/weather?q=germany&appid=14f448661409837a93c872f24e68b7d5&units=metric(newly generated)


const apiKey = '14f448661409837a93c872f24e68b7d5';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric7&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
let weatherIcon = document.querySelector('.weather-icon');


async function checkWeather(city){

  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if(response.status === 404){

    document.querySelector('.error').style.display = "block";
    document.querySelector('.weather').style.display = "none";

  }else{

    let data = await response.json();

    searchBtn.addEventListener("click" , () => {
      checkWeather(searchBox.value);
    });

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity = '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'km/hr';

    if(data.weather[0].main === 'Clouds'){

      weatherIcon.src = "images//clouds.png";

    }else if(data.weather[0].main === 'Clear'){

      weatherIcon.src = "images//clear.png";

    }else if(data.weather[0].main === 'Rain'){

      weatherIcon.src = "images//rain.png";

    }else if(data.weather[0].main === 'Drizzle'){

      weatherIcon.src = "images//drizzle.png";

    }else if(data.weather[0].main === 'Mist'){

      weatherIcon.src = "images//mist.png";
    }

    document.querySelector('.weather').style.display = "block";
    document.querySelector('.error').style.display = "none";
    
  }
}
