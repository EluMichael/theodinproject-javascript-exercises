const sumAll = function(startRangeInt, endRangeInt) {
    let total = 0, 
        nextInt =startRangeInt;
    
    // loop through to have cumulative addition total + functionNextnumber
    for (i=0; i < endRangeInt; i++){
        total = total + nextInt;
        nextInt++;
    }
    return total
};

// Do not edit below this line
module.exports = sumAll;
