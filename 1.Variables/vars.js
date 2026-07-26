console.log('Welcome to Variables Section');

//variable Declaration
var x = 'om namah Shivay';
var y = 12.4;
var z = 45565555656;
console.log(x);
console.log(y);
console.log(z);

//after es 6 we have two more ways to declare variables
//we prefer let and const over var

//consrt can not be reassigned
const a = 5;
// a = 12; //
// console.log(a); error

let p = 10;
console.log(p);
p = 666;
console.log(p); // reassigned Value Will be Printed


//scope of a variable
// vars are function scoped not block scoped like if else while for

// example :  

function test() {
    var xo
}
// console.log(xo) // gives referance error variable not defind

if (true) {
    var xo_xo = 190;

}
console.log(xo_xo, "this is inside if block yet accessible");


//=================> Vars declared with Let are Block scoped <================================


if (true) {
    let a_a = "Tiger";
}
// console.log(a_a, "i will give referance error");

// redeclaration works in vars but not for let , const , reassignment works for both vars and let but not for const



//=============> tricky question const make object immutable NOT necessarily true

const person = {
    name: "Omkar"
}
person.name = "Rahul" // valid as the person is referanced to a same object but its contents can be changed



