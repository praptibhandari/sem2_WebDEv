const input = document.querySelector('input[type="text"]');
const btn = document.querySelector("#search");

btn.addEventListener("click", () => getWeather(input.value));
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") getWeather(input.value);
});

function setThemeFromWeather(conditionText, isDay) {
  const text = (conditionText || "").toLowerCase();

  document.body.classList.remove(
    "theme-sunny",
    "theme-cloudy",
    "theme-rain",
    "theme-snow",
    "theme-night"
  );

  // overlays
  const overlay = document.querySelector(".weather-overlay");
  overlay.classList.remove("sunny", "rain");

  const isRain =
    text.includes("rain") ||
    text.includes("drizzle") ||
    text.includes("thunder") ||
    text.includes("storm");

  const isSnow =
    text.includes("snow") ||
    text.includes("sleet") ||
    text.includes("blizzard") ||
    text.includes("ice");

  const isCloud =
    text.includes("cloud") ||
    text.includes("overcast") ||
    text.includes("mist") ||
    text.includes("fog");

  const isSunny =
    text.includes("sunny") || text.includes("clear");

  if (isSnow) {
    document.body.classList.add("theme-snow");
  } else if (isRain) {
    document.body.classList.add("theme-rain");
    overlay.classList.add("rain");
  } else if (!isDay) {
    document.body.classList.add("theme-night");
  } else if (isCloud) {
    document.body.classList.add("theme-cloudy");
  } else if (isSunny) {
    document.body.classList.add("theme-sunny");
    overlay.classList.add("sunny");
  } else {
    document.body.classList.add(isDay ? "theme-cloudy" : "theme-night");
  }
}


async function getWeather(city) {
  city = city.trim();
  if (!city) {
    alert("Please enter a location");
    return;
  }

  // Loading UI
  document.querySelector(".temperature").textContent = "Loading...";
  document.querySelector(".condition").textContent = "--";
  document.querySelector(".feelslike").textContent = "--°C";
  document.querySelector(".humidity").textContent = "--%";
  document.querySelector(".wind").textContent = "-- km/h";
  document.querySelector(".uv").textContent = "--";

 //India bias
  const q = encodeURIComponent(city + ", India");
  const url = `https://api.weatherapi.com/v1/current.json?key=c7236d36debb4636a18170654262201&q=${q}&aqi=no`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.error?.message || "City not found");
    }

    
    document.querySelector(".temperature").textContent = data.current.temp_c + " C";
    document.querySelector(".location").textContent = `${data.location.name}, ${data.location.region}`;
    document.querySelector(".condition").textContent = data.current.condition.text;
    document.querySelector(".weather-status img").src = "https:" + data.current.condition.icon;

    
    document.querySelector(".feelslike").textContent = data.current.feelslike_c + "°C";
    document.querySelector(".humidity").textContent = data.current.humidity + "%";
    document.querySelector(".wind").textContent = data.current.wind_kph + " km/h";
    document.querySelector(".uv").textContent = data.current.uv;

   
    const local = data.location.localtime; 
    const [date, time] = local.split(" ");
    document.querySelector(".time").textContent = time;
    document.querySelector(".date").textContent = date;
    document.querySelector(".day").textContent =
      new Date(local.replace(" ", "T")).toLocaleDateString("en-US", { weekday: "long" });

    //  Theme switch
    setThemeFromWeather(data.current.condition.text, data.current.is_day === 1);

  } catch (err) {
    document.querySelector(".temperature").textContent = "Error";
    alert(err.message);
  }
}
