//returns the sum of all numbers passed to the function, or another function that expects one argument to add to the original argument. If any argument is not a number, it will return undefined.

function addTogether() {
  let operands = [...arguments]
  if(!operands.every(elem => typeof elem == 'number')){
    return;
  }

  switch(operands.length){
    case 1: return (num) => addTogether(operands[0], num)
    default:
      return operands.reduce((acc, value) => {
      return acc + value;
    }, 0)
  }
}

let result = addTogether(2,3,5);
console.log(result)
