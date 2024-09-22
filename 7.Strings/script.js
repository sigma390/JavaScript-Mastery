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

//4.Get a Substring

let substr = hobbies.substring(2, 5); //or hobbies.slice(2, 5)
console.log(substr);

//5.Split String into Array Of strings

let toSplit = 'this is A string goNNA BE sPLITTED';
let splitted = toSplit.split(' ');
console.log(splitted);
console.log(splitted.indexOf('A'));

//6. Reverse A string
let Proper = 'Testing';
let reverse = Proper.split('').reverse().join('');
console.log(reverse);

//7.Repeat String
let stringToRepeat = 'Repeat';

let repeated = stringToRepeat.repeat(5);
console.log(repeated);

//8. Trim removes , white Spaces before and After

let trimmed = '  Hello World  '.trim();
console.log(trimmed);

//9.Replace A string
let messedUp = '1.2.3.4.5.6';

let replaced = messedUp.replace('.', '|'); //single Ocuurance that is Only , first .
console.log(replaced);
let replacedAll = messedUp.replace(/\./g, '|'); //replace All Occurances
console.log(replacedAll);
//Common pattern , \$ means escaped $ , also we need to use /then escaped
