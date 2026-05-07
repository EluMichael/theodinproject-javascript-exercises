/*
Analysis:
- know how to select js string items
- store to new container(variable)
*/
const reverseString = function(string) {
  let reversedString = "";
  for (let i = string.length - 1; i>= 0; i--){
    reversedString += string[i];
  }
  return reversedString
};

// Do not edit below this line
module.exports = reverseString;
