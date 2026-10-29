// Immediately Invoked Function Expression (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    //UNKNOWN and PARAMETER IFFE
    console.log(`DB CONNECTED TWO ${name}`);
})('shweta');

//global scope ke pollution se problem hoti hai to remove that pollution we use iife 
//js is single threaded, everyrthing is a process

