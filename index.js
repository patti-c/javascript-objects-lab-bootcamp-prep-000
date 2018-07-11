var recipes = {eggs : 3, milk : 1, cheese : 2}

function updateObjectWithKeyAndValue(object, key, value) {
  newObject = object[key] = value
  return newObject
}