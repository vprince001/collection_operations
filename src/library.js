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
  let currentIndex = 1;
  if(initializer != undefined){
    result = initializer;
    currentIndex = 0;
  }
  while(currentIndex < collection.length){
    result = reducer(result, collection[currentIndex]);
    currentIndex++;
  }
  return result;
};

exports.map = map;
exports.filter = filter;
exports.reduce = reduce;
