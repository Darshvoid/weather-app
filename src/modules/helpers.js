const flag = document.getElementById("location-flag");
const locationMain = document.getElementById("location-main");
let baseTempC = null;

const helpers = {
  processInputs(input, cb) {
    try {
      const allInputs = input.split(",");
      const processedInputs = allInputs.map((el) => {
        return cb(el);
      });

      return processedInputs;
    } catch (e) {
      console.log(e);
    }
  },

  includesMatch(arr = [], str = "") {
    const lowerStr = str.toLowerCase();
    return arr.some((item) => item.toLowerCase() === lowerStr);
  },

  convertTemperature(value) {
    return Math.floor((value * 9) / 5 + 32);
  },

  returnDaySingleWord(date) {
    const days = ["M", "T", "W", "T", "F", "S", "S"];
    const dateObj = new Date(date);

    const day = dateObj.getDay();

    return days[day];
  },
};

export default helpers;
