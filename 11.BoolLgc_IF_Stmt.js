// Operators are all same apart from == and ===
// == checks for values regardless of data type, ex: string ('42' == 42) will give true
// === checks for values and data type, ex: string ('42' == 42) will give false [BEST PRACTICE]
// != checks for non-equal values regardless of datatype
// !== checks for non-equal values considering datatype [BEST PRACTICE]
const status1 = 200;
if(status1 === 200)
{
    console.log('OK!');
}
else if(status1 === 400)
{
    console.log('ERROR!');
}
else
{
    console.log('UNKNOWN STATUS');
}

////////// Alternate Way ///////////// I DONT USE IT
const status2 = 200;
if(status2===200) console.log('OK!'); // No {} required if single line statment in if, I DONT USE IT AND THE INSTRUCTOR DOESNT USE IT TOO
else if (status2===400) console.log('ERROR!');
else console.log('UNKNOWN STATUS');

//////// ternary (instant) ////////////
const message = (status2 === 200) ? 'OK!': 'ERROR!';
console.log(message); // message stores the value of the result