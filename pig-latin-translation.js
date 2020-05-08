//returns the pig latin translation for a given word, str

function translatePigLatin(str) {
  let vowelMatch = str.match(/[aeiou]/);
  let newStr = '';

  if(!vowelMatch){
    newStr = str.concat("ay")
  } 
  
  else if(vowelMatch["index"] > 0){
    let vowelIndex = vowelMatch["index"]
    newStr = str.slice(vowelIndex).concat(str.slice(0,vowelIndex)+ 'ay');
  } 
  
  else{
    newStr = str.concat('way')
  }

  return newStr
}

console.log(translatePigLatin("california"));
