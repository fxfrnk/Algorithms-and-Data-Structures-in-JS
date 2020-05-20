//Returns a new string with the characters from str &, <, >, ", and ' converted to their corresponding HTML entities

function convertHTML(str) {
  var htmlEntities = {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","\'":"&apos;"}
  var charArray = str.split('');
  let newStr = '';

  charArray.map((item,index) => {
    if(Object.keys(htmlEntities).includes(item)){
      charArray[index] = htmlEntities[item]
    }
  })
  
  newStr = charArray.join('')
  return newStr;
}

let result = convertHTML('Stuff in "quotation marks"');
console.log(result)
