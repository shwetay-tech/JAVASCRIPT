const myArr = [0,1,2,3,4,5]

console.log(myArr["3"]); // 1

// shallow copy is similar to stack and heap , deep copy is similar to stack .
const myHeros = ["thor", "spiderman", "ironman"]
const myArr2 = new Array(1 ,2 ,3 ,4)

console.log(myHeros[0]); // thor

//Array methods
 myArr.push(10)
 myArr.pop()

myArr.unshift(2)
myArr.shift()
console.log(myArr.includes(7))
console.log(myArr.indexOf(13)); // "-1" means not found

const newArr = myArr.join()

console.log(myArr); 
console.log(typeof newArr);

slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); // slice(startIndex, endIndex) => endIndex is not included

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); // splice(startIndex, deleteCount) => deleteCount is the number of elements to remove
console.log("C ", myArr); // it manipulate the original array or value 
console.log(myn2);