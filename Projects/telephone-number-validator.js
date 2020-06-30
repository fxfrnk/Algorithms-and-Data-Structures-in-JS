//returns true if the passed string looks like a valid US phone number

function telephoneCheck(str) {
  let numberFormats = {1: /^\d{10}$/, 2: /^[1 ]*\d{3}-\d{3}-\d{4}$/, 3: /^[1 ]*\(\d{3}\) *\d{3}-\d{4}$/, 4: /^[1 ]*\d{3} \d{3} \d{4}$/}

  for(let index in numberFormats){
    if (str.match(numberFormats[index])){
      return true
    }
  }

  return false
}

let result = telephoneCheck("5555555555");
console.log(result)
