const removeFromArray = function (arr, ...deletedElem) {
  arr.forEach(() => {
    deletedElem.forEach((elem) => {
      index = arr.indexOf(elem);
      if (index > -1) {
        arr.splice(index, 1);
      }
    });
  });
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
