const map = function(mapper, collection) {
  let mappedCollection = [];
  for(element of collection) {
    mappedCollection.push(mapper(element));
  }
  return mappedCollection;
};

exports.map = map;
