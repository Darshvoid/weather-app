import domActions from "./modules/domHandling.js";
import weatherAPI from "./modules/fetchAPI.js";
import helpers from "./modules/helpers.js";
import "./styles/reset.css";
import "./styles/index.css";
import icons from "./icons/index.js";

const getScheme = () =>
  getComputedStyle(document.documentElement)
    .getPropertyValue("color-scheme")
    .trim();

let currentColorScheme = getScheme();

const themeSwitcher = document.getElementById("theme-switcher");
const degreeSwitch = document.getElementById("degree-switch");
const locationInput = document.getElementById("location-input");
const locationWeather = document.getElementById("location-weather");
const locationFlag = document.getElementById("location-flag");

const loadingElement = document.createElement("div");
loadingElement.classList.add("loading-container");

const loadingText = document.createElement("p");
loadingText.classList.add("loading-text");

const loadingSVG = document.createElement("img");
loadingSVG.classList.add("loading-svg");

loadingElement.appendChild(loadingText);
loadingElement.appendChild(loadingSVG);

document.getElementById("search-icon").src =
  icons.ui[`search--${currentColorScheme}`];

document.getElementById("theme-icon").src =
  icons.ui[`theme-switch--${currentColorScheme}`];

let degreeType = "us";
let degreeValue = null;

themeSwitcher.addEventListener("click", () => {
  domActions.changeTheme();

  currentColorScheme = getScheme();

  document.getElementById("theme-icon").src =
    icons.ui[`theme-switch--${currentColorScheme}`];

  document.getElementById("search-icon").src =
    icons.ui[`search--${currentColorScheme}`];

  loadingSVG.src = icons.ui[`3-dots-${currentColorScheme}`];
});

degreeSwitch.addEventListener("click", () => {
  if (locationWeather.textContent.includes("--°C")) {
    alert("Input an address into searchbar before changing degree type");
    return;
  }

  degreeType = degreeType === "us" ? "uk" : "us";

  if (degreeType === "us") {
    degreeSwitch.textContent = "/F";
    locationWeather.textContent = `${degreeValue}°C`;
  } else {
    degreeSwitch.textContent = "/C";
    locationWeather.textContent = `${Math.round(
      helpers.convertTemperature(degreeValue, degreeType),
    )}°F`;
  }
});

locationInput.addEventListener("keyup", async (e) => {
  if (e.target.value === "") {
    if (loadingText.textContent.includes("Failed")) {
      loadingElement.remove();
    }
  }

  if (e.key === "Enter") {
    try {
      loadingText.textContent = "Processing address";
      loadingSVG.src = icons.ui[`3-dots-${currentColorScheme}`];

      document.body.querySelector("header").appendChild(loadingElement);

      const address = await weatherAPI.fetchAddressData(e.target.value);

      let country = null;

      loadingText.textContent = "Getting location data";

      if (address.country) {
        country = await weatherAPI.fetchCountryData(address.country);
        locationFlag.src = loadingSVG.src;
      }

      loadingText.textContent = "Getting location weather";

      const weather = await weatherAPI.fetchWeatherData(
        `${address.country || ""},${address.city || ""}, ${address.state || ""}`,
      );

      loadingElement.remove();
      loadingText.textContent = "Processing address";

      domActions.updateWeatherContent({
        locationFlag: country?.flag,
        locationMain:
          address.state ||
          address.country ||
          address.city ||
          weather.state ||
          weather.city,
        locationSecondary:
          address.city ||
          address.state ||
          weather.state ||
          weather.city ||
          address.country,
        locationWeather: `${weather.currentWeather.temp}°C`,
        weatherIcon: icons.weather[weather.currentWeather.icon],
        weatherWind: `Wind: ${weather.currentWeather.windspeed} km/h`,
        weatherPrecipitation: `Precipitation: ${weather.currentWeather.precip} %`,
        weatherHumidity: `Humidity: ${weather.currentWeather.humidity} %`,
        weatherDescription: `${weather.currentWeather.description}`,
        week: weather.week,
      });

      degreeValue = weather.currentWeather.temp;
    } catch (e) {
      console.log(e);

      loadingText.textContent = `Failed: ${e.message}`;
      loadingSVG.src = icons.ui["failed"];

      locationFlag.src =
        "https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png";
    }
  }
});
