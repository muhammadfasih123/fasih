"use strict";
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let names = ['Ahmed', 'Salman', 'Hammad', 'Huziafa'];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
for (let name of names) {
    let message = `Good morning ${name},I hope you are doing well`;
    console.log(message);
}
