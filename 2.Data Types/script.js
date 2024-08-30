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
console.log(res);
console.log(typeof res); //NaN is a Number

//===================> Boolean <===================

let a = true | 1;
let b = false | 0;
console.log(a, b);
