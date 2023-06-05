/*
    NOTE: BOTH COMMUNICATION PROTOCOLS AND FILE TRANSFER PROTOCOLS RELY ON TEXT BASED FORMATS FOR DATA TRANSFER
    JSON: This is where it comes in. JSON is a lightweight data exhange format. 
          i.e., Language independent and user readable.
          Any language that supports these two data structures can use JSON:
           1. Name-Value pairs.
           2. Ordered list of values.

*/

//OBJECT FORMAT
const book = {title:"1984",author:"George Orwell",isAvailable: false};

// Converting to JSON FORMAT
const bookJSON = JSON.stringify(book);
console.log(bookJSON);

//////////////////////////////  JSON FORMAT  ///////////////////////////////
/*
    1. FOR SINGLE OBJECT: The name-value pairs are seperated by commas and they are all enclosed in '{}' 
    {
        "title":"Becoming",
        "author":"Michelle",
        "isAvailable":false
    }

    2. FOR Multiple OBJECTs or Multi item arrays serialized: it encloses all the multiple objects seperated by commas inside square brackets '[]'
    [
        {
            "title":"Becoming",
            "author":"Michelle",
            "isAvailable":false
        },
        {
            "title":"Becoming",
            "author":"Michelle",
            "isAvailable":false
        },
        {
            "title":"Becoming",
            "author":"Michelle",
            "isAvailable":false
        }
    ]
*/

/////////////////////// OBJECT/COLLECTION - JSON CONVERSION //////////////////////

// Serialize a JavaScript Object into an equivalent text string
const book1Obj = {title:"Becoming",author:"George Orwell",isAvailable: false}; // you can also call it JSON Format text
var book1json = JSON.stringify(book1Obj);
console.log(book1json);

// Serialize a collection of JavaScript Objects into an Ordered list
var copiesArray = [book1Obj,book1Obj];
var CopiesJson = JSON.stringify(copiesArray);
console.log(CopiesJson); 

// DeSerialize/Restore the original objects from the JSON
var book2Obj = JSON.parse(book1json);
console.log(book2Obj.title);

// DeSerialize/Restore the original Array from the JSON
var book3Json = '[{"name1":"Becoming1"},{"name2":"Becoming2"}]';
var book3Array = JSON.parse(book3Json);
console.log(book3Array[0].name1);
console.log(book3Array[1].name2);

//READ MORE ABOUT FUNCTIONS AS OBJECT
