//=====================> Operaters =================

//======> Airthmatic Operators <=========
// +, -, *, /, %, ++, -- basically

const a = 5;
const b = 10;
let res = 0;
res = a + b; //addition
console.log(res);
res = a - b; //subtraction
console.log(res);
res = a * b; //multiplication
console.log(a * b);
res = a / b; //division
console.log(res);
res = a ** b; //exponential
console.log(res);

//===> pre and Post increment <=========

//post Increment
let x = 1;
console.log(x++);
console.log(x);

//pre increment

let y = 1;
console.log(++y);
console.log(y);

//modulo operator
//basically gives Remainder
let z = 10;
let d = 7;
let ress = z % 7;
console.log(ress);

//==============================================> Comparison Operators <================================

let num1 = 10;
let num2 = 20;

//greater than

console.log(num1 > num2);

//less than
console.log(num1 < num2);

//greater than or equal to
console.log(num1 >= num2);

//less than or equal to
console.log(num1 <= num2);

//equal to
console.log(num1 == num2);

//Strict Equality and Inequality
console.log(num1 === num2);
console.log(num1 !== num2);

//always Use Strict Equality and Inequality

//good Ones : === ,  !==
//evil Ones : == , !=

//examples
console.log('' == 0); //true

console.log('1' == 1); //true

console.log(true == 1); //true

console.log(false == 'false'); //false

//=================================> Logical Operators <================================

//AND , &&
console.log(true && false);
//OR  ,\\
console.log(true || false);
//NOT !
console.log(!true);

//================================> Assignment Operators <===============================
// = , +=, -=, *=, /=, %=
