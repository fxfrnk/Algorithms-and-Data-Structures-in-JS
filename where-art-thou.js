//Returns an array of any object in collection that has all properties and matching values given in source.

function whatIsInAName(collection, source) {
  let arr = [];
  let sourceProps = Object.keys(source)
  arr = collection.filter((obj) => sourceProps.every((prop) => obj[prop] == source[prop]))

  return arr;
}

console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }));
