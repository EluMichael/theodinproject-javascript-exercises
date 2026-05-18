const leapYears = function(varYear) {
    if (varYear % 100 == 0){ //start checking from number divisible by 100
        if (varYear % 4 == 0) {
            return true
        }
        else {
            return false
        }
    }
    else {
        if (varYear % 4 == 0){
            return true
        }
        else {
            return false
        }
    }
};

// Do not edit below this line
module.exports = leapYears;
