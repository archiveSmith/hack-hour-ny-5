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
    let storage = {};
    storage[currNum] = n
    if (n % 1000 === 0) {
        let numOfMs = n/1000;
        storage[M] = numOfMs;
        storage[currNum] = n - 
    if (n % 500 === 0) {
        storage[D] = n/500;
    }
    if (n % 100 === 0) {
        storage[C] = n/100;
    } 
    if (n % 50 === 0) {
        storage[L] = n/50;
    }
    if (n % 10 === 0) {
        storage[X] = n/10;
    }
    if (n % 5 === 0) {
        storage[V] = n/5;
    }
}

module.exports = romanNumeral;
