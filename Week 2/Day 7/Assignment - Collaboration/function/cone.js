const index = require("../index"); // Import index to run rl on this file

// Function to calculate cube volume
function calculateConeVolume(r,t) {
  return 0.333 * Math.PI * r**2 *t;
}

// Function to input the length
function inputCone() {
  index.rl.question("Jari-jari: ", (r) => {
    
      index.rl.question("tinggi: ", (t) => {
        if (!isNaN(r) && !isNaN(t)) {
          console.log(`\nCylinder: ${calculateConeVolume(r, t)} \n`);
          index.rl.close();
        } else {
          console.log(`Jari-jari dan tinggi must be a number\n`);
          input();
        }
      });
    });
 
}

module.exports = { inputCone }; // Export the input, so the another file can run this code
