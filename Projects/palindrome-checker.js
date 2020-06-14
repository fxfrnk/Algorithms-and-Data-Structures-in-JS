function palindrome(str) {
  let reg = /\W*_*/g
  let simplifiedStr = str.replace(reg, '').toLowerCase()
  let reverseStr = []
  
  simplifiedStr.split('').map(letter => reverseStr.unshift(letter))

  if(simplifiedStr == reverseStr.join('')){
    return true;
  } else{
    return false
  }

}

let result = palindrome("A man, a plan, a canal. Panama");
console.log(result)
