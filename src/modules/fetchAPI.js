import helpers from "./helpers.js";

const weatherAPI = {
  async fetchAddressData(input) {
    const url = `https://api.geoapify.com/v1/geocode/search?text=${input}&limit=1&format=json&apiKey=3c3f1c7de33343f19e5ef11358e874a7`;
    const response = await fetch(url);

    if (response.status === "404") {
      throw new Error("Invalid address input");
    }

    const data = await response.json();
    if (data.results.length === 0) throw new Error("Invalid address input");
    const country = data.results[0].country || null;
    const state = data.results[0].state || null;
    const city = data.results[0].city || null;

    return {
      country,
      state,
      city,
    };
  },

  async fetchCountryData(input) {
    const url = `https://restcountries.com/v3.1/name/${input}`;
    const response = await fetch(url);

    if (response.status === "404") {
      throw new Error("Invalid country input");
    }

    let data = await response.json();
    const validInput = response.url.split("name/")[1].replaceAll("%20", " ");

    for (const set of data) {
      if (
        helpers.includesMatch(set?.altSpellings, validInput) ||
        set?.name?.common.toLowerCase() === validInput.toLowerCase() ||
        set?.name?.official.toLowerCase() === validInput.toLowerCase()
      ) {
        const flag = set.flags.png;
        const capital = set.capital[0];
        return {
          flag,
          capital,
        };
      }
    }

    throw new Error("Invalid Country");
  },

  async fetchWeatherData(input) {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${input}?key=6UNEXP68LSQT2NBCGEWSBRU76&include=current&unitGroup=uk`;
    const response = await fetch(url);

    if (response.status === "404") {
      throw new Error("Invalid weather address");
    }

    const data = await response.json();
    let state = data.timezone.split("/")[1];
    state = state.replaceAll("_", " ");

    let city = data.resolvedAddress.split(",")[0];

    for (let i = 0; i <= 6; i++) {
      data.days[i].datetimesingle = helpers.returnDaySingleWord([
        data.days[i].datetime,
      ]);
    }

    return {
      city,
      state,
      currentWeather: data.days[0],
      week: [
        data.days[0],
        data.days[1],
        data.days[2],
        data.days[3],
        data.days[4],
        data.days[5],
        data.days[6],
      ],
    };
  },
};

export default weatherAPI;
