"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
/*
let PersonName: string = "muhammad fasih bin munawwar akhtar mujahid";

//Step 1: Show in lower case

let LowercaseName: string = PersonName.toLowerCase();

console.log(LowercaseName);
//Step 2: Show in upper case

let uppercase: string = PersonName.toUpperCase();

console.log(uppercase);
// step 3: show in title case*/
let PersonName = "muhammad fasih bin munawwar akhtar mujahid";
let words = PersonName.split(" ");
console.log(words);
// let titlecaseName: string = ""
// for (let i=0; i < words.length; i++)
// {
//    titlecaseName +=words[i].charAt(0).toUpperCase() +words[i].slice(1).toLowerCase()+" "
// };
// console.log(titlecaseName);
