// Datatypes
/* 
Simple types: Number(float), String, Boolean, Date, Function, Array and Object
Special types: NaN (Not a Number), null, undefined
*/

//Checking Type
/*
typeof operator: Returns a string of the data type primitive
instanceof operator: Returns a Boolean of if a value matches the data type
*/
const onee = 1;
console.log(onee instanceof Number); //this will return false because 'one' isn't created using Number datatype.

const two = 1;
console.log(typeof two);

//TYPES CAN CHANGE
let x = 'something';
x=1;
x=1+'hello'; // x becomes a string as "1hello". x was previously a number. Javascript tries to come up with the best solution possible
console.log(x);

//Equality Gotchas
let m = 0 == ''; // Javascript is going to coerce '0' and empty string '' both into the same type as boolean 'false'. Hence the answer assigned to 'm' is true, with type coerced.
let n = 0 === ''; // Hence instead we should use the triple equals operator. This does a type safe comparison between values. it will assign false to 'n' because the type is respected.

///////////////////////////////////////////// DEMO for DATATYPES ///////////////////////////////////////////////

// An Array of people's names.
const people = ["Aaron", "Mel", "John"]; 

// number
const one = 1; 

// string
const str = "Hello World" ;  

// boolean
const b = true; 

// object variable
const person = {                        
    firstname: "Aaron", // property 1
    lastname: "Powell" // property 2
}

// Function
function sayHello(person) {
    console.log("Hello "+ person.firstname);
}

// typeof operator
console.log("---- typeof ----");
console.log(typeof people);
console.log(typeof one);
console.log(typeof str);
console.log(typeof b);
console.log(typeof person);
console.log(typeof sayHello);

// instanceof operator
console.log("---- instanceof ----");
console.log(people instanceof Array);
console.log(one instanceof Number);
console.log(str instanceof String);
console.log(b instanceof Boolean);
console.log(person instanceof Object);
console.log(sayHello instanceof Function);

//We get false for one,str, and b because they are created with const and the instanceof checks them with Number,String and Boolean constructor, hence if we do this below then we get true:
const three = new Number(3);
const somestring = new String("Hi again");
const somebool = new Boolean(true);

// typeof operator.. we will get 'object' as result since we created them using constructors
console.log("---- typeof for the rest 3 ----");
console.log(typeof three);
console.log(typeof somestring);
console.log(typeof somebool);

// instanceof operator
console.log("---- instance of the rest 3 ----");
console.log(three instanceof Number);
console.log(somestring instanceof String);
console.log(somebool instanceof Boolean);
