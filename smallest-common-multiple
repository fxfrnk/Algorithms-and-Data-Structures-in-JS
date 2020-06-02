function smallestCommons(arr) {
  arr.sort((a,b) => a-b);
  let rangedArr = [];
  var factoredNums = [];
  var joinedPrimeFactors = [];


  for(let index = arr[0]; index <= arr[1]; index++){
    rangedArr.push(index)
  }

  rangedArr.map(num => factoredNums.push(findPrimeFactors(num)))
  
  joinedPrimeFactors = factoredNums[0]

  factoredNums.map(arr => {
    joinedPrimeFactors = joinArrays(joinedPrimeFactors, arr)
  })

  //console.log(rangedArr)
  return joinedPrimeFactors.reduce(function(acc, value){
    return acc * value
    }, 1)
 
}

function findPrimeFactors(number){
  let factors = [];
  let divisor = 2;

  while(factors.length < 1){

    if (divisor >= number){
       factors.push(number)
    }
    
    else if(number % divisor == 0){
       factors.push(divisor)
       factors = factors.concat(findPrimeFactors(number/divisor))
     }

     divisor++
   }
  
  return factors
}

function joinArrays(arr1, arr2){
  let newArr2 = arr2;
  let joinedArr = [];

  arr1.map(item => joinedArr.push(item))
  //console.log(joinedArr)
  joinedArr.map(item => {
    if(newArr2.includes(item)){
      newArr2.splice(newArr2.indexOf(item), 1)
    }
  })

  if(newArr2.length > 0){
    newArr2.map(item => joinedArr.push(item))
  }

  return joinedArr;
}


let result = smallestCommons([23,18]);
console.log(result)
