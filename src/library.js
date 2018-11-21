const map = function(mapper, collection) {
  let mappedCollection = [];
  for(element of collection) {
    mappedCollection.push(mapper(element));
  }
  return mappedCollection;
};

const filter = function(filterer, collection) {
  let filteredCollection = [];
  for(element of collection) {
    if(filterer(element)) {
      filteredCollection.push(element);
    }
  }
  return filteredCollection;
};

const reduce = function(reducer, collection, initializer){
  let result = collection[0];
  let startingIndex = 1;

  if(initializer) {
    result = initializer;
    startingIndex = 0;
  }

  for(let index = startingIndex; index < collection.length; index++) {
    result = reducer(result, collection[index]);
  }

  return result;
};

exports.map = map;
exports.filter = filter;
exports.reduce = reduce;
