//==============================|> Functions <|==============================

function Square(x) {
  //parameters
  return x * x;
}

const res = Square(10); //arguements
console.log(res);

//function Declaration

//1.Normal

function Normal() {
  console.log('Normal Function');
}

//2.Anonymous Function

const namee = function (x) {
  return x ** 2;
};

console.log(namee(10));

//3. Arrow Function
const Arrow = (x) => {
  return `Arrow at Speed of ${x}`;
};
console.log(Arrow(10));

//==============> Arrow Functons ( does not have this Keyword) =============================

const Cube = (number) => {
  return number ** 3;
};

console.log(Cube(6));

//================> Params vs Argues

function addNumbers(a, b, c) {
  //params
  return a + b + c;
}

console.log(addNumbers(1, 2, 3)); // 1,2,3 are Arguements

//================> Default Parameters
function add(a, b = 10) {
  //b==10 is Default parameter
  return a + b;
}
