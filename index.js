'use strict';

const jsonString = require("./emojis.js").json;
console.log(jsonString.length);

//const jsonString = JSON.stringify(miyamoto); Stringify
const emojisStructure = JSON.parse(jsonString);

console.log(emojisStructure.christmas_tree);
