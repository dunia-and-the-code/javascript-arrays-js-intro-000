var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var cities = ["New York", "San Francisco"];

[...cities, "Philadelphia"];

cities = ["Philadelphia", ...cities];

const cats = ["Milo", "Garfield"];

const moreCats = ["Felix", ...cats];


function addElementToBeginningOfArray(array, element) {
  array = ['foo', ...array]
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = array.unshift('foo')
	return array; 
}

function addElementToEndOfArray(array, element) {
  array = [...array, 'foo']
  return array;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push('foo');
  return array;
}

function accessElementInArray(array, index) {
  return array[2];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}







