/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
    function powHelper(result, b, p) {
        if (p < 0) {
            return 1 / (powHelper(result, b, p*-1));
        }
        if (p === 0) {
            return 1;
        }
        if (p === 1) {
            return result*b;
        }
        if (p % 2 === 0) {
            return powHelper(result, b*b, p / 2);
        }
        return powHelper(result * b, b, p-1);
    }
    return powHelper(1, base, power);
}

module.exports = pow;
