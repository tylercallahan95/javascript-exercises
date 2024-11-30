const leapYears = function (year) {
  if (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0) {
    //console.log('True');
    return true;
  } else {
    //console.log('False');
    return false;
  }
};

leapYears(1996);

// Do not edit below this line
module.exports = leapYears;
