var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var cities = ["New York", "San Francisco"];

[...cities, "Philadelphia"];

cities = ["Philadelphia", ...cities];

const cats = ["Milo", "Garfield"];

const moreCats = ["Felix", ...cats];

function addElementToBeginningOfArray(colors, color) {
return colors + color;
}

function destructivelyAddElementToBeginningOfArray() { 
}
  
var colors = ["red", "yellow", "green", "blue"]
  
color = ["orange", ...colors];