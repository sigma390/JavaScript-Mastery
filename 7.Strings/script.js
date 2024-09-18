//3 ways To declare A string

//1 double Curly Braces

let str = 'Omkar';
console.log(str);
//2. single Quotes

let singQuoteString = 'Nisha';
console.log(singQuoteString);

//===========>possible Flaw , abbrevatons i'm , we're it breaks String , so Add \ that means The Character Skipped

let y = "i'm good feeling alright";

//3. Backticks

let word = 'formated';
let formattedString = `this is A ${word} string`;
console.log(formattedString);

//string Methods

//1.Length str.length
let a = 'Om';
console.log(a.length);
console.log(a[0]); //indexing is like ARRAY strarts From 0

//2.Change Case

let mixedCase = 'This is a Mixed Cases String';
let lowerCaseString = mixedCase.toLowerCase();
let upperCaseString = mixedCase.toUpperCase();
console.log(lowerCaseString);
console.log(upperCaseString);
