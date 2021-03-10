const index = require("../index"); // Import index to run rl on this file

// Function to calculate Cylinder volume
function calculateCylinder(r,height) {
  
  return height * Math.PI * r**2 ;
}


// Function to input the R
function input() {
  index.rl.question("Jari-jari: ", (r) => {
    
      index.rl.question("tinggi: ", (height) => {
        if (!isNaN(r) && !isNaN(height)) {
          console.log(`\nCylinder: ${calculateCylinder(r, height)} \n`);
          index.rl.close();
        } else {
          console.log(`Jari-jari dan tinggi must be a number\n`);
          input();
        }
      });
    });
 
}



module.exports = { input }; // Export the input, so the another file can run this code
