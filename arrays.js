var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var cities = ["New York", "San Francisco"];

[...cities, "Philadelphia"];

cities = ["Philadelphia", ...cities];

const cats = ["Milo", "Garfield"];

const moreCats = ["Felix", ...cats];

function addElementToBeginningOfArray(array, element) {
return array + element;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
	return array + array.unshift("orange"); 
}

var array = ["red", "yellow", "green", "blue"]
  
element = ["orange", ...colors];

