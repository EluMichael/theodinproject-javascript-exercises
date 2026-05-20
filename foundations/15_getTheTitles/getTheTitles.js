const getTheTitles = function(arrayOfObjects) {
  let titleArray = [];
  numObjInArray = arrayOfObjects.length;
  for (i=0; i<numObjInArray; i++) {
    titleArray.push(arrayOfObjects[i].title);
  }
  return titleArray;
};

// Do not edit below this line
module.exports = getTheTitles;
