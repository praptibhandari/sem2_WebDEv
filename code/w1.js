
const locationInput = document.querySelector("input[type='text']");
const searchButton = document.querySelector("#search");
const temperatureElement = document.querySelector(".temperature");
const locationElement = document.querySelector(".location");
const timeElement = document.querySelector(".time");
const dayElement = document.querySelector(".day");
const dateElement = document.querySelector(".date");
const weatherIconElement = document.querySelector(".weather-status img");
const conditionElement = document.querySelector(".condition");


const API_KEY = "c7236d36debb4636a18170654262201";
const API_BASE_URL = "https://api.weatherapi.com/v1/current.json";


async function getWeatherData(location) {
  try {
    const response = await fetch(
      `${API_BASE_URL}?key=${API_KEY}&q=${location}&aqi=no`
    );

    if (!response.ok) {
      throw new Error("Location not found. Please try again.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}


// function updateWeatherDisplay(data) {
//   // Update temperature
//   temperatureElement.textContent = `${data.current.temp_c} C`;

//   // Update location
//   locationElement.textContent = data.location.name;

//   // Parse and update time, day, and date from localtime
//   const localtime = data.location.localtime;
//   const dateObj = new Date(localtime.replace(" ", "T"));

//   timeElement.textContent = dateObj.toLocaleTimeString("en-US", {
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//   });

//   dayElement.textContent = dateObj.toLocaleDateString("en-US", {
//     weekday: "long",
//   });

//   dateElement.textContent = dateObj.toLocaleDateString("en-CA");

//   // Update weather icon (ensure it has proper protocol)
//   const iconUrl = data.current.condition.icon;
//   weatherIconElement.src = iconUrl.startsWith("//")
//     ? "https:" + iconUrl
//     : iconUrl;

//   // Update weather condition text
//   conditionElement.textContent = data.current.condition.text;
// }

// // Handle search button click
// async function handleSearch() {
//   const location = locationInput.value.trim();

//   if (!location) {
//     alert("Please enter a location name.");
//     return;
//   }

//   try {
//     // Show loading state
//     temperatureElement.textContent = "Loading...";

//     // Fetch and display weather data
//     const weatherData = await getWeatherData(location);
//     updateWeatherDisplay(weatherData);
//   } catch (error) {
//     temperatureElement.textContent = "Error";
//     alert(error.message || "Failed to fetch weather data. Please try again.");
//   }
// }

// // Event Listeners
// searchButton.addEventListener("click", handleSearch);

// // Allow pressing Enter key to search
// locationInput.addEventListener("keypress", (event) => {
//   if (event.key === "Enter") {
//     handleSearch();
//   }
// });





///-------------new--------------------//
// Get elements
// let input = document.querySelector("input[type='text']");
// let btn = document.querySelector("#search");

// // Click button to search
// btn.addEventListener("click", function() {
//   let city = input.value;
//   getWeather(city);
// });

// // Press Enter to search
// input.addEventListener("keypress", function(e) {
//   if (e.key === "Enter") {
//     let city = input.value;
//     getWeather(city);
//   }
// });

// // Get weather data
// function getWeather(city) {
//   // Check if input is empty
//   if (city === "") {
//     alert("Please enter a city name");
//     return;
//   }

//   // Show loading message
//   document.querySelector(".temperature").textContent = "Loading...";

//   fetch("https://api.weatherapi.com/v1/current.json?key=c7236d36debb4636a18170654262201&q=" + city + "&aqi=no")
//     .then(function(response) {
//       // Check if response is ok
//       if (!response.ok) {
//         throw new Error("City not found");
//       }
//       return response.json();
//     })
//     .then(function(data) {
//       // Show data in page
//       document.querySelector(".temperature").textContent = data.current.temp_c + " C";
//       document.querySelector(".location").textContent = data.location.name;
//       document.querySelector(".condition").textContent = data.current.condition.text;
//       document.querySelector(".weather-status img").src = "https:" + data.current.condition.icon;
//     })
//     .catch(function(error) {
//       // Show error message
//       document.querySelector(".temperature").textContent = "Error";
//       alert(error.message);
//     });
// }
