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
    //if(!n || typeof n !== 'number') return undefined;
    const numsChart = {
      0: '',
      1: 'I',
      2: 'II',
      3: 'III',
      4: 'IV',
      5: 'V', 
      6: 'VI',
      7: 'VII',
      8: 'VIII',
      9: 'IX',
      10: 'X',
      40: 'XL',
      50: 'L',
      90: 'XC',
      100: 'C', 
      400: 'CD',
      500: 'D',
      900: 'CM',
      1000: 'M'
    }
  
    if(n <= 10) {
      return numsChart[n];
    } else if(n < 100) {
      const remainder = n % 10;
      n = n - n % 10;
      const temp = numsChart[n] === undefined ? romanNumeral(n - 10) + romanNumeral(10) : numsChart[n];
      return temp + numsChart[remainder];
    } else if(n < 1000) {
      const remainder = n % 100;
      n = n - n % 100;
      const temp = numsChart[n] === undefined ? romanNumeral(n - 100) + romanNumeral(100): numsChart[n];
      return temp + romanNumeral(remainder);
    } else if(n < 10000) {
      const remainder = n % 1000;
      n = n - n % 1000;
      const temp = numsChart[n] === undefined ? romanNumeral(n - 1000) + romanNumeral(1000): numsChart[n];
      return temp + romanNumeral(remainder);
    }
    
  }

module.exports = romanNumeral;
