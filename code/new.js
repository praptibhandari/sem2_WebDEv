
let input = document.querySelector("input[type='text']");
let btn = document.querySelector("#search");


btn.addEventListener("click", function() {
  let city = input.value;
  getWeather(city);
});


input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    let city = input.value;
    getWeather(city);
  }
});


function getWeather(city) {

  if (city === "") {
    alert("Please enter a city name");
    return;
  }


  document.querySelector(".temperature").textContent = "Loading...";

  fetch("https://api.weatherapi.com/v1/current.json?key=c7236d36debb4636a18170654262201&q=" + city + "&aqi=no")
    .then(function(response) {

      if (response.status === 404) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(function(data) {

      document.querySelector(".temperature").textContent = data.current.temp_c + " C";
      document.querySelector(".location").textContent = data.location.name;
      document.querySelector(".condition").textContent = data.current.condition.text;
      document.querySelector(".weather-status img").src = "https:" + data.current.condition.icon;
    })
    .catch(function(error) {
      
      document.querySelector(".temperature").textContent = "Error";
      alert(error.message);
    });
}

