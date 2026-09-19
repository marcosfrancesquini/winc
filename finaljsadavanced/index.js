'use strict';

const prompt = require('prompt-sync')();
const cakeRecipes = require("./cake-recipes.json");

// Your functions here

const showAllAuthors = (cakeRecipes) => {
  const authorsList = [];

  cakeRecipes.forEach((cakeRecipe) => {
    if (!authorsList.includes(cakeRecipe.Author)) {
      authorsList.push(cakeRecipe.Author);
    }
  });
  return authorsList.sort();
};


const showRecipeNames = (cakeRecipes) => {
  if (cakeRecipes.length === 0) {
    console.log("No recipes found.");
    return;
  }

  cakeRecipes.forEach((cakeRecipe) => {
    const { Name } = cakeRecipe;
    console.log(Name);
  });
};


console.clear();

// Part 2

const displayMenu = () => {

  console.log("\nRecipe Management System Menu:");
  console.log("1. Show All Authors");
  console.log("2. Show Recipe names by Author");
  console.log("3. Show Recipe names by Ingredient");
  console.log("4. Get Recipe by Name");
  console.log("5. Get All Ingredients of Saved Recipes");
  console.log("0. Exit");
  const choice = prompt("Enter a number (1-5) or 0 to exit: ");
  return parseInt(choice);

}


let choice;

do {

  choice = displayMenu();

  switch (choice) {
    case 1:
      console.log(showAllAuthors(cakeRecipes));
      break;
    case 2:
      console.log(showRecipeNames(cakeRecipes));
      break;
    case 3:

      break;
    case 4:

        break;
    case 5:

      break;
    case 0:
      console.log("Exiting...");
      break;
    default:
      console.clear();
      console.log("Invalid input. Please enter a number between 0 and 5.");
  }
} while (choice !== 0);
