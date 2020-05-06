//Returns a new array with all elements in arr removed that are the same value of any argument that follows arr.

function destroyer(arr) {
  let args = [...arguments]
  let resultArr=[];

  resultArr = arr.filter((item)=> !args.slice(1).includes(item))
  return resultArr;
}

console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan"));
