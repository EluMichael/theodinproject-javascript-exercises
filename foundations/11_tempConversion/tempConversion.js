const convertToCelsius = function(valueDegreeFahrenheit) {
  return Math.round((valueDegreeFahrenheit -32) * (5/9)*10) / 10;
};

const convertToFahrenheit = function(valueDegreeCelsius) {
  return Math.round(((9/5)*valueDegreeCelsius + 32)*10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
