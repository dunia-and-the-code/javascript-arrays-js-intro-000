var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var cities = ["New York", "San Francisco"];

[...cities, "Philadelphia"];

cities = ["Philadelphia", ...cities];

const cats = ["Milo", "Garfield"];

const moreCats = ["Felix", ...cats];

//
function addElementToBeginningOfArray(array, element) {
return array + element;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
	return array + array.unshift('foo'); 
}

const array = [1]
  
element = ['foo', ...array];

function addElementToEndOfArray(array, element) {
  return array + element;
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array + array.push('foo');
}

element = [...array, 'foo'];
//

var array = [1, 2, 3];
index = accessElementInArray[2];

function accessElementInArray(array, index) {
  return index;
}


