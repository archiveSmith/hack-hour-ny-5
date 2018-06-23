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


function modemean(array) {
	let mean = array.reduce((sum, num, index, array) => {
		sum += num;
		if(index === array.length-1) return Math.floor(sum/array.length); 
		return sum;  
	},0);
	let mode = array.reduce((final, num, index, array) => {
		final[num]?final[num]++:final[num] = 1; 
		if(index === array.length-1){
			let maxCount = 0;
      let maxKey = 0; 
			for(let key in final){
				if(final[key] >= maxCount && key > maxKey){
          maxCount = final[key];
          maxKey = key;
        }
			}
			return parseInt(maxKey); 
		}
		return final; 
	}, {}); 
	return mean === mode; 
}

module.exports = modemean;
