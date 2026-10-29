// primitive

const { useInsertionEffect } = require("react");

// 7 types : String, Number, Boolean, undefined, null, Symbol, BigInt

// const score = 100;
// const scoreValue = "100.4";

// const isLoggedin = false 
// const outsideTemp = null
// let userEmail ;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId); // false

// const bigNumber = 123456789012345678901234567890123456n 

// Reference (Non primitive)

// Object, Array, Function

// const heros = ["shweta", "sy", "sachin"]
// let myObj ={
//     name: "shweta",
//     age: 21,
//     isLoggedIn: false
// }

// const myFunction = function(){
//     console.log("Hello World");
// }

// console.log(typeof bigNumber);

// console.log(typeof outsideTemp);

// console.log(typeof anotherId);

// ***************************************************************-

// Stack (Primitive) , Heap (Non - primitive)

let myYouTubename = "shwetayadavdotcom"

let anothername = myYouTubename
anothername = "khushiyadav"

console.log(myYouTubename);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"  
}
let userTwo = userOne

userTwo.email = "shweta@google.com"

console.log(userOne.email);
console.log(userTwo.email);