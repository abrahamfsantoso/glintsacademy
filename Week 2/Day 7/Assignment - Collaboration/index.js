// Import readline
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const cylinder = require("./function/cylinder"); // import 
const cone = require("./function/cone"); // import 
const sphere = require("./function/sphere");

function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}

// Function to display the menu
function menu() {
  console.log(`Menu`);
  console.log(`====`);
  console.log(`1. Cylinder`); //yoga
  console.log(`2. Cone`); //mas fikri
  console.log(`3. Sphere`); //mas abie
  console.log(`4. Exit`);
  rl.question(`Choose option: `, (option) => {
    if (!isNaN(option)) {
      // If option is a number it will go here
      if (option == 1) {
        cylinder.input(); 
      } else if (option == 2) {
        cone.inputCone(); 
      } else if (option == 3){
        sphere.inputRadius();
      } else if (option == 4) {
        rl.close(); // It will close the program
      } else {
        console.log(`Option must be 1 to 4!\n`);
        menu(); // If option is not 1 to 3, it will go back to the menu again
      }
    } else {
      // If option is not a number it will go here
      console.log(`Option must be number!\n`);
      menu(); // If option is not 1 to 3, it will go back to the menu again
    }
  });
}

menu(); // call the menu function to display the menu

module.exports.rl = rl; // export rl to make another can run the readline
module.exports.isEmptyOrSpaces = isEmptyOrSpaces