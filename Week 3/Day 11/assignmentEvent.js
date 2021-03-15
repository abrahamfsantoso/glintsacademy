const EventEmitter = require('events'); // Import
const readline = require('readline');

 // Initialize an instance because it is a class
const my = new EventEmitter();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Registering a listener
my.on("Login Failed", function(email) {
  // TODO: Saving the login trial count in the database
  console.log(email, "is failed to login!");
  rl.close()
})

my.on("Login Success", function(email) {
    // TODO: Saving the login trial count in the database
    console.log(email, "succesfully login!");
    //const Ass2 
    require('../../Week 2/Day 10/assignment2.js')
    rl.close();
    
  })

const user = {
    login(email, password) {
      const passwordStoredInDatabase = "123456";
  
      if (password !== passwordStoredInDatabase) {
        my.emit("Login Failed", email); // Pass the email to the listener
      } else {
        // Do something
        my.emit("Login Success", email);
      }
    }
  }
  
  rl.question("Email: ", function(email) {
    rl.question("Password: ", function(password) {
      user.login(email, password) // Run login function
    })
  })
  