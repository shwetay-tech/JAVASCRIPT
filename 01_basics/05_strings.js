const name = "shweta"
const repoCount = 50

console.log(name + repoCount + "Value".toUpperCase()); // shweta50Value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Hello my name is shweta and my repo count is 50

const gameName = new String('anita-hc')

console.log(gameName[2]); 
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // used to check the position of the character 
console.log(gameName.indexOf('t')); 

const newString = gameName.substring(0, 5) // (start,end-1)
console.log(newString); // anita

const anotherString = gameName.slice(-8, 6)
console.log(anotherString); // anita-4

const newStringOne = "    shweta    "
console.log(newStringOne);
console.log(newStringOne.trim()); // shweta


const url = "https://shweta.com/shweta%20yadav"

console.log(url.replace('%20', '-'));

console.log(url.includes('khushi'));

console.log(url.split('-'));


