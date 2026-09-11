//const fruit = ['Banana', 'Apple'];
//const basket = ['Banana', 'Apple'];
//
//console.log(JSON.stringify(fruit));
//
//console.log(JSON.stringify(fruit) == JSON.stringify(basket));

// com every!

'use strict';

// JS comparing arrays with equality operator

const fruits = ['Banana', 'Apple', 'Orange'];
const basket = ['Banana', 'Apple', 'Orange'];

const compareArrays = (arrayA, arrayB) => {
  if(arrayA.length !== arrayB.length) { 
    // Not the same length is not equal arrays.
    return false; 
  } else {
    // for each element in array A 
    // it checks if it is equal 
    // to the element in the same position (hence index is used) in array B
    return arrayA.every((element, index) => element === arrayB[index]);
  }
};

console.log(compareArrays(fruits, basket)); // true


// Shorter version of the same function
const compareArraysShort = (a, b) => a.length == b.length && a.every((e, i) => e === b[i]);

console.log(compareArraysShort(fruits, basket)); // true
