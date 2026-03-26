const root = document.documentElement;
const currentTheme = getComputedStyle(
  document.documentElement,
).getPropertyValue("color-scheme");
// THEME HANDLING

const domActions = {
  changeTheme(theme) {
    const themeIcon = document.getElementById("theme-icon");
    const searchIcon = document.getElementById("search-icon");
    const currentColorScheme =
      getComputedStyle(root).getPropertyValue("color-scheme");
    const days = document.querySelectorAll(".day-icon");
    const weatherIcon = document.getElementById("temperature-icon");

    if (theme) {
      root.style.setProperty("color-scheme", theme);
      themeIcon.src = `./icons/theme-switch--${theme}.svg`;
      searchIcon.src = `./icons/search--${theme}.svg`;

      return;
    }

    if (currentColorScheme === "light") {
      root.style.setProperty("color-scheme", "dark");
      themeIcon.src = "./icons/theme-switch--dark.svg";
      searchIcon.src = "./icons/search--dark.svg";

      if (weatherIcon.src !== "http://localhost:8080/") {
        weatherIcon.src = weatherIcon.src.replace("-dark", "");
      }

      days.forEach((el) => {
        console.log(el);
        if (el.src !== "http://localhost:8080/") {
          el.src = el.src.replace("-dark", "");
        }
      });

      return;
    }

    if (currentColorScheme === "dark") {
      root.style.setProperty("color-scheme", "light");
      themeIcon.src = "./icons/theme-switch--light.svg";
      searchIcon.src = "./icons/search--light.svg";

      if (weatherIcon.src !== "http://localhost:8080/") {
        const split = weatherIcon.src.split(".");
        weatherIcon.src = `${split[0]}-dark.svg`;
      }

      days.forEach((el) => {
        console.log(el);
        if (el.src !== "http://localhost:8080/") {
          const split = el.src.split(".");
          el.src = `${split[0]}-dark.svg`;
        }
      });

      return;
    }
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
    console.log(weatherHumidity, weatherHumidity.textContent);
    const weatherDescription = document.getElementById("weather-description");
    const days = document.querySelectorAll(".day-container");

    locationFlag.src = stats.locationFlag || "--";
    locationMain.textContent = stats.locationMain || "--";
    locationSecondary.textContent = stats.locationSecondary || "--";
    locationWeather.textContent = stats.locationWeather || "--°";
    console.log(currentTheme);
    weatherIcon.src = `./icons/weather/${stats.weatherIcon}${currentTheme === "light" ? "-dark" : ""}.svg`;

    weatherWind.textContent = stats.weatherWind || "Wind: -- km/h";
    weatherPrecipitation.textContent =
      stats.weatherPrecipitation || "Precipitation: --%";
    weatherHumidity.textContent = stats.weatherHumidity || "Humidity: --%";
    weatherDescription.textContent = stats.weatherDescription || "--";

    for (let i = 0; i <= 6; i++) {
      console.log(currentTheme);
      days[i].querySelector(`#day-${i}`).textContent =
        stats.week[i].datetimesingle;
      days[i].querySelector(".day-temp").textContent = `${stats.week[i].temp}°`;
      days[i].querySelector(".day-icon").src =
        `./icons/weather/${stats.week[i].icon}${currentTheme === "light" ? "-dark" : ""}.svg`;
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
