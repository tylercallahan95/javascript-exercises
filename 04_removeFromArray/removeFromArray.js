const removeFromArray = function (array, ...remove) {
  filteredArray = array.filter((x) => !remove.includes(x));
  console.log(filteredArray);
  return filteredArray;
};

removeFromArray([1, 2, 3, 4], 1, 2);
// Do not edit below this line
module.exports = removeFromArray;
