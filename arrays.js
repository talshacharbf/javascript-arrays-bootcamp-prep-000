var chocolateBars = [
  'snickers',
  'hundred grand',
  'kit kitkat',
  'skittles',
]

function addElementToBeginningOfArray (array, element) {
  return [${element},`${...array}`]
}
