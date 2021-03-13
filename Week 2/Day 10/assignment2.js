let person = [
    {
        "name": "John",
        "status": "Positive"
    },
    {
        "name": "Mike",
        "status": "Suspect"
    },
    {
        "name": "Connor",
        "status": "Positive"
    }
];

// // using for loop
// for (let i = 0; i < person.length; i++) {
//     if (person[i].status == "Positive") {
//       console.log(`${person[i].name}`);
//     }
// };

// using switch statement
let target = "Positive";
switch(target){
    case "Positive":
        let positive = person.filter((subject) => subject.status == "Positive");
        console.log("\nPositive \n=========");
        positive.map((subject, index) => console.log(`${index + 1}. ${subject.name}`));
    break;
    case "Suspect":
        let suspect = person.filter((subject) => subject.status == "Suspect");
        console.log("\nSuspect \n=========");
        suspect.map((subject, index) => console.log(`${index + 1}. ${subject.name}`));
    break;
    default:
        console.log("Please input valid status!");
    }

