// Object :- Date: contains date and time. time is stored as number of ms since 1 Jan 1970.

//Get right now
const now = new Date();

//set a specific date and time
//month counting starts with zero!
const randomDate = new Date(2015,3,12,6,25,58); // Syntax: (year, month(4th here), day, hr, min, sec)

//set a specific date - time set to midnight
const win95Launch = new Date(1995,7,24);

// Gonna give time in UTC
console.log(randomDate);
console.log(win95Launch);
console.log(now);

/////// SETTING VALUES //////////

const now1 = new Date();
now1.setFullYear(2014); // sets year
now1.setMonth(3); // sets month as 4
now1.setDate(4); // sets day
now1.setHours(4);// 24 hour clock
now1.setMinutes(24);
now1.setSeconds(46);

console.log(now1);

////// GETTING VALUES ///////////

// all of the set functions have an equivalent get (obviously)
console.log(now.getMonth()); // (jan = 0)
console.log(now.getTime()); //milliseconds since 1 jan 1970
console.log(now.getDay()); // day of the week (sunday=0)

