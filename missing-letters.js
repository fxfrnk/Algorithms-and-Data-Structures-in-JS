//Returns the missing letter from a range str, or undefined if no letter is missing from the range.

function fearNotLetter(str) {
  var missingLetters = [];
  var strToArr = [...str]

  missingLetters = strToArr.map((letter, letterIndex, arr) => {
    if (letterIndex < arr.length - 1){
      let rangeDiff = arr[letterIndex+1].charCodeAt(0) - letter.charCodeAt(0)
      if (rangeDiff>1){
        return String.fromCharCode(letter.charCodeAt(0)+1)
      }
    }
    return ''
  })
  
  return missingLetters.filter(item => item)[0];
}

let result = fearNotLetter("abce");
console.log(result)
