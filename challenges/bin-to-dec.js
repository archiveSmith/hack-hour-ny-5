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
  const { length } = binary;
  let decimal = 0;

  for (let i = 0; i < length; i++) {
    const exp = length - 1 - i;
    decimal += binary[i] * Math.pow(2, exp);
  }

  return decimal;
}

function decToBin(decimal) {
  if (decimal === 0) {
    return '0';
  }

  let binary = '';
  let exp = Math.floor(Math.log2(decimal));
  let binColumn = 2 ** exp;
  
  while (exp >= 0) {
    if (decimal >= binColumn) {
      binary += '1';
      decimal -= binColumn;
    } else {
      binary += '0';
    }

    exp--;
    binColumn = 2 ** exp;
  }
  
  return binary;
}

module.exports = binToDec;
