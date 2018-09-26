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
  const conversions = {
    1: I,
    4: IV,
    5: V,
    9: IX,
    10: X,
    40: XL,
    50: L,
    90: XC,
    100: C,
    400: CD,
    500: D,
    900: CM,
    1000: M
  };

  if (conversions[n]) return conversions[n];

  let numString = n.toString();
  let length = numString.length;
  let result = 0;
}

module.exports = romanNumeral;
