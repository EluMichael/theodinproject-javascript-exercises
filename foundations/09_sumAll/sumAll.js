const sumAll = function(startRangeInt, endRangeInt) {
    let total = 0, 
        nextInt =startRangeInt,
        totalElement;

    if (startRangeInt > 0){
        totalElement = endRangeInt - startRangeInt + 1;
    }
    else {
        totalElement = endRangeInt - startRangeInt;
    }// These assume only natural number to be valid if when what a series of positive integers


    // loop through to have cumulative addition total + functionNextnumber
    for (i=0; i < totalElement; i++){
        total = total + nextInt;
        nextInt++;
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
