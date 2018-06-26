/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */
// mean = the average number of all elements
// mode = the element that occurs most in the array

//if mode has more than one answer use the highest mode
//math.floor the mean;

function add(a, b){
	return a + b;
}

function modemean(array) { //[1, 1, 1, 2, 2, 2]
  let modeObj = {};
  let numOfMode = 0;
  let mode = 0;
  let mean = Math.floor(array.reduce( (accum, curr) => {  // mean = 1;
  	return add(accum,curr)
  }, 0) / array.length);
 
  
  for (let i = 0; i < array.length; i++) { //{1: 3, 2: 3}
  	// let count = 0;
    if(modeObj[array[i]] === undefined){
  	  modeObj[array[i]] = 1;
    } else {
      modeObj[array[i]]++;;
    }
  }

  for(let key in modeObj){ // key - {"1": 3, "2": 3}
  	if(modeObj[key] > numOfMode){ // 3 > 3
  		numOfMode = modeObj[key]; // numOfMode = 3;
  		mode = Number(key);               // mode = 1
  	} 
  	if (modeObj[key] === numOfMode && Number(key) > mode) { // 3 === 3 && 2 > 1
  		mode = Number(key);							// mode = 2
  	}
  }
  

  return mode === mean
}

// function modemean(array) {
//  const mean = Math.floor(array.reduce((acc, cur) => acc + cur) / array.length);
//  const modeObj = {}; // cache
//  const numCount = array.forEach((ele) => {
//    if (!modeObj[ele]) modeObj[ele] = 1;
//    else  modeObj[ele] += 1;
//  });
//  let [finalMode, maxModeVal] = [0, 0];
//  for(let [keyValue, mode] of Object.entries(modeObj)) {
//    if (mode > maxModeVal && keyValue > finalMode) {
//      finalMode = keyValue;
//      maxModeVal = mode;
//    }
//  }
//  console.log(`The mean is ${mean} and the mode with the highest value is ${finalMode}. 
// With the current array set up ([${array}]), mode = mean would evaluate to ${finalMode === mean}`)
//  return finalMode == mean;
// } 
//Alex hack hour solution
function modemean (array) {
  const sum = array.reduce((acc, cur) => acc + cur);
  const count = array.length;
  const mean = Math.floor(sum / count);

  const max;
  const frequencies = array.reduce((acc, cur) => {
    if (cur in counts) counts[cur] += 1;
    else counts[cur] = 1;
    return counts;
  }), {};
  const mode = 

  return mean === mode;
}

module.exports = modemean;
