const repeatString = function(string, num) {
  if (num >= 0){
   let stringConcatenate = "";
   for (let i=0; i<num; i++){
    stringConcatenate += string;
   }
   return stringConcatenate
  }
  else{
    return 'ERROR'
  }
};

// Do not edit below this line
module.exports = repeatString;
