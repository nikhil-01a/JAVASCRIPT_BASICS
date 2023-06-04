/////////////////////////// FUNCTION SYNTAX ////////////////////////////
/* 
    1. "function" keyword identifies this as a function definition
    2. "functionName" is used to invoke(exucute) funtions
    3. "var1" and "var2" are parameters for input: Javascript function doesnt check type and number 
     of parameters, hence in case fewer arguments are passed during a call then it will just fill
     the first few placeholders and leave the rest 'undefined'. Please validate the number and
     type of arguments manually.

    function functionName(var1,var2) 
    {
        if(var>var2)
        {
            return true;
        }
        return false;
    }

    NOTES: 
    1. FOR FUNCTION NAMES: USE ALPHA,NUMBERS,$ and _ and no other special characters allowed
    2. ".name" property: Returns a string name of the function: ex= console.log(sayHello.name);
    3. Anonymous functions: For later... 
*/

/////////////////////////// FUNCTIONS EXAMPLES ////////////////////////////

//////////// Function Definitons ///////////
function printThanks()
{
    console.log("Thanks for shopping");
    console.log("Discounts expire Dec 1!");
}
function computePrice(cost, discount)
{
    let reduction = cost*discount;
    console.log("You saved $"+reduction);
    return cost-reduction; //Return statement, no need of mentioning 'return datatype' beside 'function' keyword
}
function printHello(name1)
{
    console.log("Hello "+name1+"!");
}

//////////// Function Invocations ///////////
printThanks();
computePrice(100); // Intentionally not giving the second parameter, so that you see the error! Only 'cost' argument takes value
printHello("Nikhil");
computePrice(100,2);
