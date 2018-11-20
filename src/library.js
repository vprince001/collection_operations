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

exports.map = map;
exports.filter = filter;
