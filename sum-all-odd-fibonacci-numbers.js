//Returns the sum of all odd fibonacci numbers that are less than or equal to num

function sumFibs(num) {
  var oddSum = 2;
  let fibResult = [1,1];
  let nextTerm
    
  for(let index = 0; index < num; index++){
    nextTerm = fibResult[index]+fibResult[index+1]
   
    if((nextTerm % 2 == 1) && (nextTerm <= num)){
      oddSum += nextTerm
    }

      fibResult.push(nextTerm)
    }
  
  return oddSum;
}

let result = sumFibs(75025);
console.log(result)
