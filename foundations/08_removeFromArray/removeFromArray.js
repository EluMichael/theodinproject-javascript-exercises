const removeFromArray = function(varArray, num) {
    for (i=0, len=varArray.length; i<len; i++) {
        varArray = varArray.filter(x => x !== num[i]);
    }
    return varArray;
};

// Do not edit below this line
module.exports = removeFromArray;
