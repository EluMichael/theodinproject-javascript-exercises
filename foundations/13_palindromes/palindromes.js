const reverseString = function (text) {
    return text.split("").reverse().join("");
}

const palindromes = function (text) {
  let reversedText = reverseString(text);
  return (text == reversedText) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
