function dropElements(arr, func) {
  let resultArr = [];
  let resultFound = false;

  arr.map((item, index) =>{
    if(func(item) && !resultFound){
      resultArr = [...arr.slice(index)]
      resultFound = true;
    }
  })
  return resultArr;
}

let result = dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});
console.log(result)
