var recipes = { key : "value"}

function updateObjectWithKeyAndValue(obj, key, value) {
  return ObjectAssign({}, obj, { [key]: value })
}
