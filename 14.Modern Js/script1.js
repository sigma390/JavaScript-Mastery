// ES6 JS

//1. const and Let
const a = 10;
let x = [1, 2, 3, 4];

//2.Arrow Functions

const mul = (x) => {
  return x * 5;
};
console.log(mul(5));

//3.Default para
const fun = (x = 12, y) => {
  return x + y;
};
console.log(fun(13, 6));

//4.Template Strings

const customer = 'John';
const order = {
  name: 'ipad',
  price: 1400,
};
console.log(
  `hey ${customer} Do you Wanna buy ${order.name + ' for ' + order.price}`
);
