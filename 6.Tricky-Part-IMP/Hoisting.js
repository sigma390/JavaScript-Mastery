// var hoisting
console.log(x); //undefined as the variable Declaration only Moved to the top
var x = 10; // only works with var , ( let and const ) will give error

//function Hoisting

const Arrow = () => {
  console.log(y); //undefined as the function declaration only Moved to the top
  var y = 20; // only works with let and const
};
Arrow();

// Function Hoisting

func();

function func() {
  let test = 111; //here  let is Allowed but , Arrow Function Hoisting Not Allowd
  console.log(test);
}

//==========> Modern JS doesnt Support hoisting <=============
