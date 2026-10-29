const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 13.7565
console.log(otherNumber.toPrecision(2));

const hundred = 100000
console.log(hundred.toLocaleString('en-In')); 

// ************************ Maths ***************************

console.log(Math);
console.log(Math.abs(-7.5)); //-ve value changes to +ve value
console.log(Math.round(7.5)); //rounds to nearest integer
console.log(Math.ceil(7.3)); //rounds up to the next integer
console.log(Math.floor(7.9)); //rounds down to the previous integer
console.log(Math.min(7, 3, 9, 1)); //returns the minimum value
console.log(Math.max(7, 3, 9, 1)); //returns the maximum value
console.log(Math.random());//returns a random number between 0 and 1
console.log((Math.random()*10) + 1); //returns a random number between 1 and 10 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //returns a random number between 10 and 20