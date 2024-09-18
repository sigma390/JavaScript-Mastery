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

//3. Find A String in A String

let hobbies =
  'I love  HTML,CSS and JavaScript as well as TypeScript, JavaScript';
//first Occurance

let foundIndex = hobbies.indexOf('JavaScript'); //White Spaces Are Also Counted
console.log(foundIndex);

//last index  tells , whats Last index oF a substring that means theres A duplicacy

let lastFoundIndex = hobbies.lastIndexOf('JavaScript');
console.log(lastFoundIndex);

//Includes()

let doInclude = hobbies.includes('TypeScript');
console.log(doInclude);

//Starts With and Ends WIth

let starts = hobbies.startsWith('I love');
let ends = hobbies.endsWith('JavaScript');
console.log(starts);
console.log(ends);
