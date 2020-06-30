function rot13(str) {
  let decodedStr = "";
  
  for(let index = 0; index < str.length; index++){
    if(str[index].match(/[A-M]/)){
      decodedStr = decodedStr.concat(String.fromCharCode(str.charCodeAt(index)+13))
    }

    else if(str[index].match(/[N-Z]/)){
      decodedStr = decodedStr.concat(String.fromCharCode(str.charCodeAt(index)-13))
    }

    else{
      decodedStr += str[index]
    }
  }
  return decodedStr;
}

let result = rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
console.log(result)
