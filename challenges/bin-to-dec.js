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

// Reduce method

function hexToDec(hexadecimal) {
  let result = 0;
  let reversed = hexadecimal.split("").reverse();

  for (let i = 0; i < reversed.length; i++) {
    switch (!Number.isInteger(reversed[i])) {
      case "A" || "a":
        result += 10 * Math.pow(16, i);
        break;
      case "B" || "b":
        result += 11 * Math.pow(16, i);
        break;
      case "C" || "c":
        result += 12 * Math.pow(16, i);
        break;
      case "D" || "d":
        result += 13 * Math.pow(16, i);
        break;
      case "E" || "e":
        result += 14 * Math.pow(16, i);
        break;
      case "F" || "f":
        result += 15 * Math.pow(16, i);
        break;
      default:
        result += parseInt(reversed[i]); // adds the integer normally if not a letter
    }
  }
  return result;
}

module.exports = binToDec;
