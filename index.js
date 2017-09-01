var recipes = { key : "value"}

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign({}, obj, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(object, key) {
  Object.assign({}, object, [key])
}
function destructivelyDeleteFromObjectByKey(object, key) {
  delete [key]
}
