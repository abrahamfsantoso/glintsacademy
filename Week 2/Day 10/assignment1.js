let myArray = ["tomato", "broccoli", "kale", "cabbage", "apple"];

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] == "apple") {
        console.log("Not vegetable");
    } else
        console.log (`"${myArray[i]} is a healthy food, it\'s definitely worth to eat."`)
}

