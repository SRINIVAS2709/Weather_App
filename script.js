const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-btn");
const weatherImage = document.querySelector(".weather-img");
const searchData = searchInput.value;



const apiKey = "64e28676be3c0e852aa9ce51dc148c79";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404){
        document.querySelector(".error-info").style.display = "block";
        document.querySelector(".container").classList.add("active");
        document.querySelector(".weather-box").style.display = "none";
        document.querySelector(".weather-info").style.display = "none";
    }
    else{


        document.querySelector(".container").classList.add("active");
        document.querySelector(".error-info").style.display = "none";
        document.querySelector(".weather-box").style.display = "block";
        document.querySelector(".weather-info").style.display = "block flex";

        document.querySelector(".temparature").innerHTML =
          Math.round(data.main.temp) + `<sup>°C</sup>`;
        document.querySelector(".desc").innerHTML = data.weather[0].description;
        document.querySelector(".weather-humidity").innerHTML =
          data.main.humidity + "%";
        document.querySelector(".wind-speed").innerHTML =
          data.wind.speed + " km/h";

        switch (data.weather[0].main) {
          case "Clear":
            weatherImage.src = "./images/clear.png";
            break;
          case "Rain":
            weatherImage.src = "./images/rain.png";
            break;
          case "Snow":
            weatherImage.src = "./images/snow.png";
            break;
          case "Clouds":
            weatherImage.src = "./images/cloud.png";
            break;
          case "Mist":
            weatherImage.src = "./images/mist.png";
            break;
          case "Haze":
            weatherImage.src = "./images/mist.png";
            break;
          default:
            weatherImage.src = "./images/clear.png";
        }

    }
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchInput.value);
})

