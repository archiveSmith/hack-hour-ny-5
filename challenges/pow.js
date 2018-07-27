/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */
 // edge = base < 1
 // power = 1 = base
 // power = 0 returns 1
 // base & power exists -done
 // base & power is integer -done

function pow(base, power) {
  if(!base || !power || !Number.isInteger(base) || !Number.isInteger(power)) return "Invalid input"
  if(power === 1) return base;
  if(power === 0) return 1;  
  if(power < 0) return 1 / (base * pow(base, (Math.abs(power) - 1))); 

  return base * pow(base, power - 1);
}

module.exports = pow;
