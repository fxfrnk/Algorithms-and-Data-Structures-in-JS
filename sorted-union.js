//Returns a new array of unique values in the same order that the original arrays are passed to the function but does duplicate any value if they are included in more than one array.

function uniteUnique(arr) {
  var completeArrays = [...arguments]
  var uniqueArray = [];

  arr.map(item => uniqueArray.push(item))

  completeArrays.map(extraArray => {
    uniqueArray = uniqueArray.concat(extraArray.filter(element => !uniqueArray.includes(element)))
  })
  return uniqueArray;
}

let result = uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);
console.log(result)
