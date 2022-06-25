/******************************************************************************
Write a function named plannedIntersect(firstArr) that takes in an array and
returns a function. When the function returned by plannedIntersect is invoked
passing in an array (secondArr) it returns a new array containing the elements
common to both firstArr and secondArr.


Example 1:
let abc = plannedIntersect(["a", "b", "c"]); // returns a function
console.log(abc(["b", "d", "c"])); // returns [ 'b', 'c' ]

Example 2:
let fame = plannedIntersect(["f", "a", "m", "e"]); // returns a function
console.log(fame(["a", "f", "z", "b"])); // returns [ 'f', 'a' ]

*******************************************************************************/

// your code here

const plannedIntersect = firstArr => {
  let filterArray = [];
  
  const matchIntersect = secondArr => {
    for (let i = 0; i < firstArr.length; i++) {
      for (let j = 0; j < secondArr.length; j++) {
        if (firstArr[i] === secondArr[j]) {
            filterArray.push(firstArr[i]);
        };
      };
    };
    return filterArray;
  };

  return matchIntersect;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/

try {
  module.exports = plannedIntersect;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
