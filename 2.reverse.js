//Lets not use comments but make the code self explanatory

//Code to reverse a string
function reverseString(value)
{
    let reversedValue="";
    value.split("").forEach((char)=>
    {
        reversedValue = char+reversedValue;
    });
    return reversedValue;
}
console.log(reverseString("Reverse Me"))