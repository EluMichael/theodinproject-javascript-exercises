const fibonacci = function(nthMember) {
  let fibonacciSequence = [1, 1];

  if (+nthMember <= 2 && +number != 0) { //convert excepted string integer to number
    return 1;
  } else if (+nthMember == 0) {
    return 0;
  } else if (+nthMember > 2) {
    for (let i=0, j=1; i<(+nthMember -2); i++, j++) {
        let nextElement = fibonacciSequence[i] + fibonacciSequence[j];
        fibonacciSequence.push(nextElement);
    }
    return fibonacciSequence[nthMember -1]; //return nth-member
  } else if (+nthMember < 0) {
    return "OOPS";
  }
};

// Do not edit below this line
module.exports = fibonacci;
