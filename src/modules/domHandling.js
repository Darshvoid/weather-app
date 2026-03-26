import icons from "../icons/index.js";

const root = document.documentElement;

const getScheme = () =>
  getComputedStyle(root).getPropertyValue("color-scheme").trim();

const getWeatherIcon = (name, scheme) => {
  if (scheme === "light") {
    return icons.weather[`${name}-dark`] || icons.weather[name];
  }

  return icons.weather[name];
};

const domActions = {
  changeTheme(theme) {
    const themeIcon = document.getElementById("theme-icon");
    const searchIcon = document.getElementById("search-icon");
    const days = document.querySelectorAll(".day-icon");
    const weatherIcon = document.getElementById("temperature-icon");

    let currentScheme = getScheme();

    if (theme) {
      root.style.setProperty("color-scheme", theme);

      themeIcon.src = icons.ui[`theme-switch--${theme}`];
      searchIcon.src = icons.ui[`search--${theme}`];

      return;
    }

    const nextTheme = currentScheme === "light" ? "dark" : "light";
    root.style.setProperty("color-scheme", nextTheme);

    themeIcon.src = icons.ui[`theme-switch--${nextTheme}`];
    searchIcon.src = icons.ui[`search--${nextTheme}`];

    if (weatherIcon.dataset.icon) {
      weatherIcon.src = getWeatherIcon(weatherIcon.dataset.icon, nextTheme);
    }

    days.forEach((el) => {
      if (el.dataset.icon) {
        el.src = getWeatherIcon(el.dataset.icon, nextTheme);
      }
    });
  },

  updateWeatherContent(stats) {
    const locationFlag = document.getElementById("location-flag");
    const locationMain = document.getElementById("location-main");
    const locationSecondary = document.getElementById("location-secondary");
    const locationWeather = document.getElementById("location-weather");
    const weatherIcon = document.getElementById("temperature-icon");
    const weatherWind = document.getElementById("weather-wind");
    const weatherPrecipitation = document.getElementById(
      "weather-precipitation",
    );
    const weatherHumidity = document.getElementById("weather-humidity");
    const weatherDescription = document.getElementById("weather-description");
    const days = document.querySelectorAll(".day-container");

    const scheme = getScheme();

    locationFlag.src = stats.locationFlag || "--";
    locationMain.textContent = stats.locationMain || "--";
    locationSecondary.textContent = stats.locationSecondary || "--";
    locationWeather.textContent = stats.locationWeather || "--°";

    weatherIcon.dataset.icon = stats.weatherIcon;
    weatherIcon.src = getWeatherIcon(stats.weatherIcon, scheme);

    weatherWind.textContent = stats.weatherWind || "Wind: -- km/h";
    weatherPrecipitation.textContent =
      stats.weatherPrecipitation || "Precipitation: --%";
    weatherHumidity.textContent = stats.weatherHumidity || "Humidity: --%";
    weatherDescription.textContent = stats.weatherDescription || "--";

    for (let i = 0; i <= 6; i++) {
      const day = days[i];
      const iconKey = stats.week[i].icon;

      day.querySelector(`#day-${i}`).textContent = stats.week[i].datetimesingle;

      day.querySelector(".day-temp").textContent = `${stats.week[i].temp}°`;

      const dayIcon = day.querySelector(".day-icon");


      dayIcon.dataset.icon = iconKey;
      dayIcon.src = getWeatherIcon(iconKey, scheme);
    }
  },

  initializeTheme() {
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? this.changeTheme("dark")
      : this.changeTheme("light");
  },
};

domActions.initializeTheme();

export default domActions;
