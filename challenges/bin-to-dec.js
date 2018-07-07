/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  if(typeof binary != 'string' || !binary) return undefined;
  return parseInt(binary, 2);
}




function decToBin(decimal) {
  if(typeof decimal != 'number' || !decimal) return undefined;
  this.remainder = this.remainder === undefined ? [] : this.remainder;
  if(decimal === 1) {
    remainder.unshift(1);
    return remainder;
  }
  if (decimal > 0) {
    remainder.unshift(decimal % 2);
    decToBin(Math.floor(decimal / 2));
  }
  return remainder.join('');
}

module.exports = binToDec;
