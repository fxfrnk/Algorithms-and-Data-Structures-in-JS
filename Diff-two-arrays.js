//Returns an array with any items unique to arr1 or arr2, i.e. items present in one array but not both.

function diffArray(arr1, arr2) {
  var newArr = [];
  newArr = arr1.filter(item => !arr2.includes(item))
  newArr = newArr.concat(arr2.filter(item => !arr1.includes(item)))
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
