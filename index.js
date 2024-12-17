const apiKey = "bc77dded58ea26a70c637a3a8342507c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

async function checkWeather(city) {
    const response = await fetch (apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °c"
    document.querySelector(".country").innerHTML = data.sys.country
}
searchBtn.addEventListener("click", ()=>{
    checkWeather("&q=" + searchBox.value);
    
})
