////////////////////////  Implicit conversion to boolean ///////////////////////////////////
/*
    Strings: Empty strings treated as false. Ex: name = ''
    Objects: Null or undefined objects treated as false
    Numbers; 0 treated as false
*/
const x = 0;
if(x)
{
    console.log("x contains a value");
}
//Use ! to reverse the result
if(!x)
{
    console.log("x doesnt contain a value");
}

//Strings are case sensitive: when we are doing comparison // Or you can use localeCompare: Take a look at the documentation for more on this
const name1 = 'christopher';
if(name1 === 'Christpoher')
{
    console.log("The values are same");
}
else
{
    console.log("The values are not same");
}

////////////////////////////////////// COMBINING COMPARISONS /////////////////////////////

// And (both sides must be true = true)
// (x & y) : Bitwise: works only on numbers
// (x && y) : Logical: works on everything: Shortcut operator: y not evaluated if x is false: [BEST PRACTICE]

// Or (either one side true = true)
// (x | y) : Bitwise: works only on numbers
// (x || y) : Logical: works on everything: Shortcut operator: y not evaluated if x is true [BEST PRACTICE]

/////////////// IF STATEMENT //////////////
const status1 = 200;
if(status1 === 200)
{
    console.log("OK!");
}
else if (status1 === 400 || status1 === 500)
{
    console.log("Error!");
}
else
{
    console.log('Unknown Status');
}

/////////////// SWITCH STATEMENT //////////// Can only check for equality
const status2 = 200;
switch(status2)
{
    case 200: console.log('OK!');
                break;
    case 400:
    case 500: console.log('Error!'); //Writing case 400 and case 500 like that is like using 'Or' '||'
                break;
    default: console.log('Unknown value!');
                break;
}
