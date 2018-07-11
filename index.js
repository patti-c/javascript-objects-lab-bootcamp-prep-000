var recipes = {eggs : 3, milk : 1, cheese : 2}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key] : value})
}

updateObjectWithKeyAndValue(recipes, 'butter', 4)

console.log(recipes)
