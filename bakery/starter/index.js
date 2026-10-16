// Import a single thing
import { add } from "./lib.js";

// Import multiple things
import { subtract, multiply, divide, square } from "./lib.js";

// Importing something that is not a function works the same
import { speedOfLightMetersPerSecond } from "./lib.js";


console.log(divide(10, 2));

console.log(square(5));

console.log(add(3, 4));

console.log(subtract(5, 2));

console.log(multiply(10, 4));

console.log(`The speed of light: ${speedOfLightMetersPerSecond} m/s.`);