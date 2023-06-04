// Creating an Array
console.log('\n ///////////////// Creating Array ///////////////');
let arraylength = 5; // setting array length
let arr1 = []; // one way with square brackets.
let arr2 = Array(arraylength); // another way with Array object.
console.log(arr1.length); //checking length
console.log(arr2.length);

//Populating array
console.log('\n ///////////////// Populating Array ///////////////');
let arr3 = ["A",true,2]; //to add elements in an array
console.log(arr3[0]);
console.log[arr3[1]];
console.log(arr3[arr3.length-1]); //arr.length to find the length of array
arr2[0]="sample at 0 of aar2";
console.log(arr2[0]);
console.log(arr2[1]);

//Array Methods
///////////////// Push & Pop ///////////////
console.log('\n ///////////////// Push & Pop ///////////////');
let arr4 = ['A',true,2];
console.log(arr4.push("new value")); //Adds a new value at the end of the array and returns new array length
console.log(arr4);
console.log(arr4.pop()); // Removes the last value of the arraya and returns it
console.log(arr4);

///////////////// Unshift & Shift ///////////////
console.log('\n ///////////////// Unshift & Shift ///////////////');
let arr5 = ['A',true,2];
console.log(arr5.unshift("new value")); // Adds a new value at the front of the array and returns new array length
console.log(arr5);
console.log(arr5.shift()); // Remove's first value of the array and returns it
console.log(arr5);

///////////////// CONCAT ////////////////
console.log('\n ///////////////// CONCAT ///////////////');
let arr6 = ['A',true,2];
let arr7 = ['B',false,3];
let newArr = arr6.concat(arr7); //Joining the second array to the end of the calling array
let newArr2 = arr7.concat([1,2,3]);
console.log(newArr);
console.log(newArr2);

