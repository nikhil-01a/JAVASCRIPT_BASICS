/////////// While Loop ///////////
// Used when a function returns false or null when completed
const names1 = ['Justin','Sarah', 'Chrsitopher'];
let index = 0;
while(index< names1.length)
{
    const name1= names1[index];
    console.log(name1);
    index++; // Write this first so that you dont forget
}

/////////// For Loop //////////////
//Use when you wan to repeat a block of code a specific number of times
const names2 = ['Justin','Sarah','Christopher'];
for(let index = 0;index<names2.length;index++)
{
    const name2 = names2[index];
    console.log(name2);
}

/////////// For ... of Loop //////// 
//Use when you want to use all the values of an array, list or collection
//This is like the for each in other languages.. Note: Java Script also has 'for each'
const names3 = ['Justin','Sarah','Christopher'];
for(let name3 of names3)
{
    console.log(name3);
}