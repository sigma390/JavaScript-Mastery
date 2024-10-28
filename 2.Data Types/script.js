console.log('Lets Start Data Types Section');

//==================> Strings <===================
//types
//1. Single Quotes
let sQuote = 'Single Quotes';
//2.Double Quotes
let dQuote = 'Double Quotes';
//3.Backticks
let name = 'Anisha';
let bekTiks = `my Gf name is ${name}`;
console.log(bekTiks);

//any javascript Code can be written in that Bracket

//ex function Call
function namee() {
  return 'Anisha and Dishita';
}
let gfName = `My Gf name is ${namee()}`;
console.log(gfName);

//===================> Numbers <===================

let num1 = 10;
let num2 = 12.5;
let num3 = num1 + num2;
console.log(num3);

//tricky Thing
let str = 'String';
let num = 10;
let res = num / str;
let res1 = num + str; //string in the end
console.log(res1); //because of + operator it will concatenate
console.log(typeof res1); //string
console.log(res);
console.log(typeof res); //NaN is a Number

//===================> Boolean <===================

let a = true | 1;
let b = false | 0;
console.log(a, b);

//==================> NULL and Undefined <===================

let age = null;
console.log(age);
console.log(typeof age);

//Undefined
let man; //decalred Variable but Not Assigned any Value
console.log(typeof man);

//====================> objects <==============================

//object used to Group Variables

let breed = 'Labrador';
let lifeSpan = 10;

let dog = {
  breed: breed,
  lifeSpan: lifeSpan,
};
//accesing Object
console.log(dog.breed);
console.log(dog.lifeSpan);

//=> date Objects <===

const date = new Date();
console.log(date);

//some Date Methods
// getFullYear(): Returns the year (e.g., 2024).
// getMonth(): Returns the month (0-11). January is 0 and December is 11.
// getDate(): Returns the day of the month (1-31).
// getDay(): Returns the day of the week (0-6). Sunday is 0 and Saturday is 6.
// getHours(): Returns the hour (0-23).
// getMinutes(): Returns the minutes (0-59).
// getSeconds(): Returns the seconds (0-59).
// getMilliseconds(): Returns the milliseconds (0-999).

//=======================> Type Of Languages Statics vs Dynamic <=====================

//static Typed : TypeScript, c++,
//dynamically typed : JavaScript, Python, Ruby;

//core Concept   : variables can be Assigned To diferent Data type Value
