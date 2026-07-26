// var hoisting
console.log(x); //undefined as the variable Declaration only Moved to the top
var x = 10; // only works with var , ( let and const ) will give error

//Hoisting Inside a fUNCTON

const Arrow = () => {
  console.log(y); //undefined as the function declaration only Moved to the top
  var y = 20; // only works with let and const
};
Arrow();

// Function Hoisting , oNLY WORKS wITH Older function Declaration function x() , Not arrow Function

func();

function func() {
  let test = 111; //here  let is Allowed but , Arrow Function Hoisting Not Allowd
  console.log(test);
}

//==========> Modern JS doesnt Support hoisting <=============


// let is also hoisted but remains "UNINITIALISED" until its declaration
// Hoisting means it initialise the whatever named with var with undefined 


//===============> TEMPORAL DEAD ZONE <======================

// code block until we reach the declaration of a variable

{

  console.log("hello");





  const uu = "this is declaration"




}