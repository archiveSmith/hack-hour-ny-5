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

//Binary numbering systems from right to left have a value twice that of the previous digit/ position indicates its weight within the string.

function binToDec(binary) {
  let result = 0;
  let reversed = binary.split("").reverse();

  for (let i = 0; i < reversed.length; i++) {
    if (reversed[i] === "1") {
      result += Math.pow(2, i);
    }
  }
  return result;
}

module.exports = binToDec;
