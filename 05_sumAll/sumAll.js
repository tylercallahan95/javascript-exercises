const sumAll = function (x, y) {
  // Initialize variables
  let small = 0;
  let big = 0;

  // Checks if first value is bigger than second. If so, small variable is set to second value
  if (x > y) {
    small = y;
    big = x;
  } else {
    small = x;
    big = y;
  }

  // For loop to run calculation
  if (
    x < 0 ||
    y < 0 ||
    typeof x == 'string' ||
    typeof y == 'string' ||
    Array.isArray(x && y) ||
    !Number.isInteger(x || y)
  ) {
    return 'ERROR';
  } else {
    let sum = 0;
    for (let i = small; i <= big; i++) {
      sum += i;
    }
    return sum;
  }
};
sumAll(1, 10);

// Do not edit below this line
module.exports = sumAll;
