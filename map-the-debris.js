//Return a new array that transforms the elements' average altitude into their orbital periods

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  
  let resultArr = [];
  
  arr.map(obj => {
    return resultArr.push({"name": obj["name"], "orbitalPeriod": Math.round(2 * Math.PI * Math.sqrt(Math.pow(obj["avgAlt"] + earthRadius, 3) / GM))})
    })
  
  return resultArr
}

let result = orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);
console.log(result)
