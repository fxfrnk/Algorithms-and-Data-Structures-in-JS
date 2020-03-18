/* This function will traverse a nested array to check if a specific element (elem) is present in the arrays nested within arr, and
returns a new array that is a copy of arr but any nested array containing elem is removed

function filteredArray(arr, elem) {
  let newArr = [];
  for(let i = 0; i< arr.length; i++){
    let elemFound = false;
    for(let j = 0; j < arr[i].length; j++){
      if (arr[i][j] == elem){
        elemFound = true
      }
    }

    if (!elemFound){
      newArr.push([...arr[i]])
    }
  }
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
console.log(filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2] ], 2));
console.log(filteredArray([ ["amy", "beth", "sam"], ["dave", "sean", "peter"] ], "peter"));
