//returns a nested array for each character in str with its pairing element. Base pairs are defined as pairs of 'AT' and 'CG'

function pairElement(str) {
  var pairingObj = {"A": "T", "T":"A", "C":"G", "G":"C"};
  var strand = str.split('')
  var pairedArr = [];
  
  pairedArr = strand.map(item => [item, pairingObj[item]])
  return pairedArr
}

console.log(pairElement("ATCGA"));
