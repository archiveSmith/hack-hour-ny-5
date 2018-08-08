/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
    function convertToRoman(number) {
        const numbers = [1000, 500, 100, 50, 10, 5, 1];
        const letters = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
        let pos = 0;
        let left = number;
        let str = '';
        while (left > 0) {
            if (left >= numbers[pos]) {
                str += letters[pos];
                left -= numbers[pos];
            }
            else if (pos % 2 === 0 && left >= (numbers[pos] - 2 * numbers[pos + 2])) {
                return convertToRoman(numbers[pos] - left) + letters[pos];
            }
            else if (pos % 2 === 1 && left >= (4 * numbers[pos+1])) {
                return convertToRoman(numbers[pos] - left) + letters[pos];
            }
            else {
                pos++;
            }
        }
        return str;
    }

    let romanString = '';
    let numStr = String(n);
    for (let i = 0; i < numStr.length; i++) {
        let curDigit = Number(numStr.charAt(numStr.length - i - 1));
        romanString = convertToRoman(curDigit * Math.pow(10, i)) + romanString; 
    }
    return romanString;
}

module.exports = romanNumeral;
