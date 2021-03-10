const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function tube(r, h) {
    let circleArea = Math.PI * r ** 2;
    let tubeVolume = circleArea * h;

    return tubeVolume;
};

function inputRadius() {
    rl.question(`Radius: `, (r) => {
      if (!isNaN(r)) {
        inputHeight(r);
      } else {
        console.log(`Radius must be a number\n`);
        inputRadius();
      }
    });
  }
  

  function inputHeight(r) {
    rl.question(`Height: `, (h) => {
      if (!isNaN(h)) {
        console.log(`\nTotal Tube Volume: ${tube(r,h)} cm3`);
        rl.close();
      } else {
        console.log(`Height must be a number\n`);
        inputHeight(r);
      }
    });
  }

console.log(`Tube Volume Calculator`);
console.log(`=========`);
inputRadius()