/* To CONVERT string to number use,
  1."ParseInt()" 
  2."ParseFloat" : works with decimal points
*/

let num1 = '150';

console.log(parseInt('100'));
console.log(parseInt(num1));
console.log(parseInt('ABC')); //Non-Numeric string
console.log(parseInt('0xF')); // Non-Numerical string, but javascript assumes this is a hexadecimal

let flo1= '1.50';
console.log(parseFloat('1.00')); //it will print just '1', there are ways to format and preserve '.00' after 1
console.log(parseFloat(flo1));
console.log(parseInt('ABC')); //Non-Numeric

console.log(parseInt('1.5')); //Anything after special character will be ignored, same for the next 
console.log(parseInt('1 + 1'));

console.log(parseInt(`${1+1}`)); // using temperate literals.

/* To CONVERT number to string use,
  1."toString()" 
*/

let num2 = 150;
let flo2 = 1.50;

console.log(num2.toString());
console.log(flo2.toString());
console.log((100).toString());

