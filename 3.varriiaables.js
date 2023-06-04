// Three ways to declare variables: var, let, const
var one = 1;
// Function scoped, Avaliable even before you have declared it, mutable inside the scope: can be reassigned
let two = 2;
// block scoped, used only after declaration, mutable inside the block scope: can be reassigned
const three = 3;
// block scoped, used only after declaration, immutable:  cannot be reassigned. 

/* What to use when
                        const: by default (often) [CANNOT BE CHANGED]
                        let: in loops [CAN BE CHANGED]
                        var: not used much [REFER ABOVE]
*/

//Example var
console.log(hello); // This gives output as undefined because the hello variable is present but its not assigned yet
var hello = "Hello"; // var meaning the hello keyword is present everywhere
//console.log(ds); // This gives a runtime error with random string ds.

//Example let 
hello = "HelloWorld";
console.log(hello);
if(true)
{
    let world = "block hello world";
    console.log(world);
}
//console.log(world);//not allowed because 'let' allows 'world' to be in block only

// Example const
const nam = 'Nikhil';
console.log(nam);
if(true)
{
    //nam = 'test'; // assignment to const variable error
}
