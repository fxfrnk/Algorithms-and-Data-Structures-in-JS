//returns true if the property value of 'pre' is truthy for all objects in 'collection'

function truthCheck(collection, pre) {
  return collection.every(elem => elem[pre])

}

let result = truthCheck([{"single": "yes"}], "single");
console.log(result)
