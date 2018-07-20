// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {
    const ends = {
        0: 'Zero', 1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five',
        6: 'Six', 7: 'Seven', 8: 'Eight',9: 'Nine', 10: 'Ten',
        11: 'Eleven', 12: 'Twelve', 13: 'Thirteen', 14: 'Fourteen', 15: 'Fifteen',
        16: 'Sixteen', 17: 'Seventeen', 18: 'Eighteen', 19: 'Nineteen', 20: 'Twenty',
        30: 'Thirty', 40: 'Forty', 50: 'Fifty', 60: 'Sixty', 70: 'Seventy', 80: 'Eighty',
        90: 'Ninty'
    };
    const len = (num + '').length;
    if (len === 1) {
        return ends[num];
    }
    if (len === 2) {
        if (ends[num]) {
            return ends[num];
        }
        return ends[(num - (num % 10))] + numToWords(num % 10);
    }
    const powToWord = {
        2: 'Hundred',
        3: 'Thousand',
        6: 'Million',
        9: 'Billion',
        12: 'Trillion',
        15: 'Quadrillion'
    };
    let pow;
    if (len === 3) {
        pow = 2;
    }
    else if (len < 7) {
        pow = 3;
    }
    else if (len < 10) {
        pow = 6;
    }
    else if (len < 13) {
        pow = 9;
    }
    else if (len < 16) {
        pow = 12;
    }
    else {
        pow = 15;
    }
    let toWord = numToWords(Math.floor(num / Math.pow(10, pow))) + powToWord[pow];
    if ((num % Math.pow(10, pow)) !== 0) {
        toWord = toWord + numToWords(num % Math.pow(10, pow));
    }
    return toWord;
}

console.log(numToWords(0));
console.log(numToWords(43));
console.log(numToWords(2999));
console.log(numToWords(15));
console.log(numToWords(2483579411));
console.log(numToWords(300525151340440));
console.log(numToWords(92120000000000000));

module.exports = numToWords;
