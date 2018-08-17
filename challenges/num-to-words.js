// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').

/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92,120,000,000,000,000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(nums) {
  const numString = nums.toString();
  let output = '';
  const length = numString.length;
  for (let i = 0; i < length; i++) {
    const column = length - i - 1;
    const num = numString[i];
    output += getNumString(num);
    output += getPlace(column);
  }

  return output;
}

function getNumString(num) {
  switch (parseInt(num)) {
    case 0:
      return 'zero';
    case 1:
      return 'one';
    case 2:
      return 'two';
    case 3:
      return 'three';
    case 4:
      return 'four';
    case 5:
      return 'five';
    case 6:
      return 'six';
    case 7:
      return 'seven';
    case 8:
      return 'eight';
    case 9:
      return 'nine';
    case 10:
      return 'ten';
    case 11:
      return 'eleven';
    case 12:
      return 'twelve';
    case 13:
      return 'thirteen';
    case 14:
      return 'fourteen';
    case 15:
      return 'fiveteen';
    case 16:
      return 'sixteen';
    case 17:
      return 'seventeen';
    case 18:
      return 'eighteen';
    case 19:
      return 'nineteen';
    case 20:
      return 'twenty';
    case 30:
      return 'thirty';
    case 40:
      return 'fourty';
    case 50:
      return 'fifty';
    case 60:
      return 'sixty';
    case 70:
      return 'seventy';
    case 80:
      return 'eighty';
    case 90:
      return 'ninety';
    default:
      break;
  }
}

function getPlace(column) {
  switch (column) {
    case 15:
      return 'quadrillion';
    case 12:
      return 'trillion';
    case 9:
      return 'billion';
    case 6:
      return 'million';
    case 3:
      return 'thousand';
    case 2:
      return 'hundred';
    default:
      return '';
  }
}

console.log(numToWords(0));
console.log(numToWords(43));
console.log(numToWords(2999));
console.log(numToWords(15));
console.log(numToWords(2483579411));
console.log(numToWords(300525151340440));
console.log(numToWords(92120000000000000));

module.exports = numToWords;
