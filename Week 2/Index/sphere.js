const index = require("./index")

function CalculateSphere(rad) {
    let spherevolume = (4/3) * Math.PI * Math.pow(rad, 3);
    return spherevolume
} 

function isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
}

function inputRadius() {
    index.rl.question(`Radius: `, (rad) => {
      if (!isNaN(rad) && !isEmptyOrSpaces(rad)) {
        console.log(`Sphere's volume is ${CalculateSphere(rad)}  cm3\n`);
        index.rl.close();
      } else {
        console.log(`Radius must be number`);
        inputRadius();
      }
    });
  }
  
  module.exports.inputRadius = inputRadius ; // Export the input, so the another file can run this code