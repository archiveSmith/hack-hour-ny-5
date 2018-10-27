/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable) {
  let combos = [[]];
  let max = 0;

  for (let i = 0; i < items.length; i++) {
    const combosCopy = [];

    for (let j = 0; j < combos.length; j++) {
      const comboCopy = combos[j].slice();
      comboCopy.push(i);
      const weightSum = comboCopy.reduce((a, c) => a + items[c].weight, 0);
      const valueSum = comboCopy.reduce((a, c) => a + items[c].value, 0);

      if (weightSum <= weightAvailable) {
        combosCopy.push(comboCopy);

        if (valueSum > max) {
          max = valueSum;
        }
      }
    }

    combos = combos.concat(combosCopy);
  }

  return max;
};

module.exports = solveKnapsack;
