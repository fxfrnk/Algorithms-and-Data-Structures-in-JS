//returns a new string by searching the sentence (str) for all instances of (before) and replacing it with (after)

function myReplace(str, before, after) {
  let regex = new RegExp(before)
  let newStr;

  if (before[0].match(/[A-Z]/)){
    after = after.replace(after[0],after[0].toUpperCase())
  }

  else{
    after = after.replace(after[0], after[0].toLowerCase())
  }
  newStr = str.replace(regex,after)
  return newStr;
}

console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));
