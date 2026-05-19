const add = function(firstValue, secondValue) {
	return firstValue + secondValue;
};

const subtract = function(firstValue, secondValue) {
	return firstValue - secondValue;
};

const sum = function(numberArray) {
	let total = 0;
  numberArray.forEach(aValue => total += aValue);
  return total;
};

const multiply = function(numberArray) {
  let total = 1;
  numberArray.forEach(v => total *= v);
  return total;
};

const power = function(base, exponent) {
	return base ** exponent;
};

const factorial = function(number) {
	let factorialResult = 1; // takes care of 0!
  for (i=1; i <= number; i++) { // only natural number
    factorialResult *= i;
  }
  return factorialResult;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
