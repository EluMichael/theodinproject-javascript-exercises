const reverseString = function (text) {
    return text.split("").reverse().join("");
}

const palindromes = function (text) {
  text = text.toLowerCase(); // set text to lower Case alphabets
  text = text.replace(/\W/g, ""); // replace non-word character to empty string

  let reversedText = reverseString(text);
  return text == reversedText
};

// Do not edit below this line
module.exports = palindromes;
