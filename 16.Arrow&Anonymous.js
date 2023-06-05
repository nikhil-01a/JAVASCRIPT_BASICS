//////////////// ARROW FUNCTIONS ///////////////// (Also called fat arrow functions)
// DEFINED BY '=>'
// MUST be assigned to a variable or immediately used.
// implicit return values
// changes to 'this' context

/////////// EXAMPLES /////////////

// ADD Arrow Function
const add = (a,b) => a+b; // Single line, hence it evaluates the line and gives a return value implicitly
console.log(add(1,2));

// SUB Arrow Function   
// We use curly brackets to denote this is gonna take multiple lines, hence we need to mention return statement explicitly
const subtract = (a,b) => 
{
    return a-b;
}; //Since we are assigning it to a variable
console.log(subtract(2,1));

// 'this' context: In arrow function it is inherited from its parent, maintained when function is passed as a reference. Look for more later.

