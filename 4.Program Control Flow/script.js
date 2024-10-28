//====================> IF STATEMENT <====================

let age = 18;

if (age > 18) {
  console.log('You are eligible to vote');
} else if (age == 18) {
  console.log('You are just 18 years old');
} else {
  console.log('Grow Up Kiddo!!');
}

//=================If Statement And Logical Ops <====================

let isCool = true;
let agee = 18;

if (isCool && age > 18) {
  console.log('Hop In boy!!!');
} else {
  console.log('Cant Enter');
}
//===============> Some Loopholes <================

console.log('truth' && 1 && 'test' && 900); //return 900

console.log(true && 0 && 'test' && 900); //return 0

console.log(true || (0 && 'test' && 900)); //return true as 2nd expression is False

console.log(false || '' || null || undefined); //return last False Value

//=====================> Switch Statement <====================

//can Accept , Number , String , Boolean in switch(ch) ;

let sname = 'Batman';

switch (sname) {
  case 'Batman':
    console.log('I am Batman');
    break;
  case 'Superman':
    console.log('I am Superman');
    break;
  case 'Spiderman':
    console.log('I am Spiderman');
    break;
  default:
    console.log('enter valid Superhero Name');
    break;
}

//======================> Ternary Statement <================

// condition ? true : false ;

let a = 10;
let b = 10;
a === b ? console.log('Equal') : console.log('Not Equal');

//======================> Looping Statement <================

// for loop

for (let i = 1; i <= 10; i++) {
  console.log(i);
}
console.log('\n====================================\n');
let i = 1;
while (i <= 10) {
  console.log(i++);
}
