const reverseString = function (phrase) {
  //let phrase = '';
  const phraseArray = phrase.split('');
  const reverseArray = phraseArray.reverse();
  const fixedPhrase = reverseArray.join('');
  console.log(fixedPhrase);
  return fixedPhrase;
};
// Do not edit below this line
module.exports = reverseString;
