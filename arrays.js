var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var cities = ["New York", "San Francisco"];

[...cities, "Philadelphia"];

cities = ["Philadelphia", ...cities];

const cats = ["Milo", "Garfield"];

const moreCats = ["Felix", ...cats];

function addElementToBeginningOfArray(array, element) {
return array + 'foo';
}

function destructivelyAddElementToBeginningOfArray(array, element) {
	return array + array.unshift('foo'); 
}

const array = [1]
  
element = ['foo', ...array];

