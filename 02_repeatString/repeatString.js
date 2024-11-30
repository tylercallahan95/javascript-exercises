let word = [];
let wordFixedString = '';
const repeatString = function (letter, amount) {
  if (amount === 0) {
    wordFixedString = '';
    return wordFixedString;
  } else if (amount < 0) {
    return 'ERROR';
  } else {
    for (i = 0; i < amount; i++) {
      word.push(letter);
      wordFixed = word.join('');
      wordFixedString = wordFixed.toString();
    }
  }
  word.length = 0;
  return wordFixedString;
};

// Do not edit below this line
module.exports = repeatString;
