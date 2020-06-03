//flattens a nested array

function steamrollArray(arr) {
  let resultArr = [];

  arr.map(item => {
    if(!Array.isArray(item)){
      resultArr.push(item)
    }

    else{
      resultArr = resultArr.concat(steamrollArray(item))
    }
  })
  return resultArr;
}

let result = steamrollArray([1, [2], [3, [[4]]]]);
console.log(result)
