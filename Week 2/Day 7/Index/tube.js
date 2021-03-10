const index = require("./index"); // Import index to run rl on this file

function tube(r, h) {
    let circleArea = Math.PI * r ** 2;
    let tubeVolume = circleArea * h;

    return tubeVolume;
};

function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}

function inputRadius() {
    index.rl.question(`Radius: `, (r) => {
      if (!isNaN(r) && !isEmptyOrSpaces (r)) {
        inputHeight(r);
      } else {
        console.log(`Radius must be a number\n`);
        inputRadius();
      }
    });
  }
  

  function inputHeight(r) {
    index.rl.question(`Height: `, (h) => {
      if (!isNaN(h) && !isEmptyOrSpaces (h)) {
        console.log(`\nTotal Tube Volume: ${tube(r,h)} cm3`);
        index.rl.close();
      } else {
        console.log(`Height must be a number\n`);
        inputHeight(r);
      }
    });
  }

module.exports.inputRadius = inputRadius;
module.exports.inputHeight = inputHeight;
