//returns the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {
  let sumOfPrimes = 0;
  let isPrime = true;

  for(var index = 2; index <= num; index++){
    let divisor = 2;
    while (divisor < num/2 && divisor < index && isPrime){
      if (index % divisor == 0){
        isPrime = false
      }
      divisor++
    }

    if(isPrime){
      sumOfPrimes += index
    }
    isPrime = true
  }
  

  return sumOfPrimes;
}

let result = sumPrimes(977);
console.log(result)
