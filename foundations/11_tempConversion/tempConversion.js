const convertToCelsius = function(valueDegreeFahrenheit) {
  return (valueDegreeFahrenheit -32) * (5/9);
};

const convertToFahrenheit = function(valueDegreeCelsius) {
  return (5/9)*valueDegreeCelsius + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
