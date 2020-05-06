//Returns the sum of all numbers in range between two numbers in the parameter arr.

function sumAll(arr) {
  let sum = 0;
  let newArr = arr.sort((a,b)=> a-b)

  for(let currentVal = newArr[0]; currentVal<=newArr[1]; currentVal++){
      sum+=currentVal;
  }

  return sum;
}

console.log(sumAll([10,5]));
