var chocolateBars = ['snickers', 'hundred', 'grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element){
  return [element, ...array]
}

function destructivelyaddElementToEndOfArray(list1, e) {
  return list1.unshift(e)
}
