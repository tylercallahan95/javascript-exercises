const convertToCelsius = function (temp) {
  celsius = (temp - 32) * (5 / 9);
  celsiusTemp = Number(celsius.toFixed(1));
  // console.log(celsiusTemp);
  return celsiusTemp;
};

const convertToFahrenheit = function (temp) {
  fahrenheit = temp * (9 / 5) + 32;
  fahrenheitTemp = Number(fahrenheit.toFixed(1));
  return fahrenheitTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
