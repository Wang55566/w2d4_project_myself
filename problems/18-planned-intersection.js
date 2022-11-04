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
//input: array, function
// Your code here
function plannedIntersect(array1) {

  return function (array2) {

    let commonWord = [];

    for(let i = 0; i < array1.length; i++) {

      for(let j = 0; j < array2.length; j++) {

        if(array1[i]===array2[j]) {

          commonWord.push(array1[i]);
        }
      }
    }

    return commonWord;
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/

try {
  module.exports = plannedIntersect;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
