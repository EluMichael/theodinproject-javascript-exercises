const sumAll = function(xRangeInt, yRangeInt) {
    let total = 0, startRangeInt, endRangeInt,
        nextInt,
        totalElement;
    
    // validate parameter and return 'ERROR'
    if ( typeof(xRangeInt)!== 'number' || typeof(yRangeInt)!== 'number' || xRangeInt < 0 || yRangeInt< 0 ) {
        return 'ERROR';
    }

    // collect any positive number and set parameter in order
    if (xRangeInt < yRangeInt) {
        startRangeInt = xRangeInt;
        endRangeInt = yRangeInt;
    }
    else {
        startRangeInt = yRangeInt;
        endRangeInt = xRangeInt;
    }        

    nextInt = startRangeInt;

    // cater for Natural integer
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
