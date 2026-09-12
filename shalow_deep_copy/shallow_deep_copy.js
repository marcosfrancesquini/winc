//shalow copy, reference into the original
'use strict';

// JS shallow copy example

const bottle = {
  size: "500ml",
  color: "blue",
  brand: "Bootle",
  model: "Thermos v10"
}

// Shallow copy
const myBottle = bottle;

// myBottle now has the same reference
console.log(myBottle === bottle); // true

// We seemingly make a change to just myBottle
myBottle.color = "pink";

// Because myBottle === bottle (a shallow copy of bottle). The change is made to bottle
console.log(bottle);
// { size: '500ml', color: 'pink', brand: 'Bootle', model: 'Thermos v10' }




//-------------------

'use strict';

// JS shallow copy array example

const colors = ["blue", "pink", "red"];

// Shallow copy
const myColors = colors;


// We seemingly make a change to just myColors
myColors.push("green");

// Because myColors refers to colors, colors is affected
console.log(colors);
// [ 'blue', 'pink', 'red', 'green' ]

//===================================================================

//deep copy, creates a new variable with no reference to the original

'use strict';

//const lodashClonedeep = require('lodash.clonedeep');
const lodashClonedeep = _.cloneDeep;

// JS deep copy example

const bottle = {
  size: "500ml",
  color: "blue",
  brand: "Bootle",
  model: "Thermos v10"
}

// Deep copy
const myBottle = lodashClonedeep(bottle);

// The objects have the same values but not the same reference
console.log(myBottle === bottle); // false

// We make a change to just myBottle
myBottle.color = "pink";

console.log(myBottle);
// { size: '500ml', color: 'pink', brand: 'Bootle', model: 'Thermos v10' }


// bottle stays the same
console.log(bottle);
// { size: '500ml', color: 'blue', brand: 'Bootle', model: 'Thermos v10' }



