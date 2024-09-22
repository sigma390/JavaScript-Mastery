//===============================> Imp Looping Methos <========================

let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

//==========> 1. ForEach <============
arr.forEach((val, i) => {
  console.log(i, val);
});

//use when :
// want to do something to Each eleemt of Array

//dont use when => WANNA Break loop for a condition

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

numbers.forEach((number) => (sum += number));
console.log(sum);

//================> 2.Map Method <=================

let inventory = [
  { price: 1, name: 'Melody' },
  { price: 5, name: 'Dairy Milk' },
  { price: 10, name: 'Kitkat' },
];
let prices = inventory.map((item) => item.price);
console.log(prices);

//================> 3. Filter Method <=================
//Filter out  elements , NOT Mutate Method , Return New Array

let mixedNums = [1, -3, 4, 5, -9, 8, -6, -2];
let positiveNums = mixedNums.filter((number) => {
  return number >= 0;
});

console.log(positiveNums);

//real life example

let emplyees = [
  {
    name: 'ALEX',
    salary: 100,
  },
  {
    name: 'Anisha',
    salary: 300,
  },
  {
    name: 'Rahul',
    salary: 1000,
  },
  {
    name: 'ALEXaa',
    salary: 200,
  },
];
//want to retrive employee with salary >300 // always Returns Boolean not a Particular thing

let RichEmp = emplyees.filter((employee) => {
  if (employee.salary > 300) {
    return employee.name;
  }
});
console.log(RichEmp);

//====================> 4.Find Method <=================
//returns first element which Staify the given Condition

let states = [
  'Alaska',
  'California',
  'Colorado',
  'New York',
  'Texas',
  'Washington',
];

const state = states.find((state) => state[0] == 'C'); //or state.startsWith('C)
console.log(state);

//====================> 5. Includes Method <=================
//strings are Case Sensitivee
let bookShelf = ['Osho', 'Sun Tzu', 'Dostovosky', 'MachiaVelli'];

if (bookShelf.includes('Osho')) {
  console.log('U have Great Choice');
} else {
  console.log('No not Great Choice');
}

//====================> 6. sort <=====================
//sorts Alphabatically means
//let array [1,15,23,3,4,5] gonna sort like , 1,15,2,3,4,5 solution : Use a Compare Function

let ranNums = [1, 15, 13, 45, 3, 6, 9, 77, 85, 23];
ranNums.sort((a, b) => a - b); //ascending Order b-a // decensding Order
console.log(ranNums);

//===================> 7.Some and Every Method <==============
let arrr = [1, 2, 3, 4, 5, 6];

//Some or every elements Follow a certain Condition
console.log(arrr.some((num) => num > 3)); //true
console.log(arrr.every((num) => num > 3)); //false

//====================> 8.Reduce <====================

//has A accumulator
let Grosaries = [
  { name: 'Milk', price: 27 },
  { name: 'Eggs', price: 28 },
  { name: 'Bread', price: 15 },
  { name: 'Apples', price: 10 },
  { name: 'Oranges', price: 12 },
  { name: 'Cheese', price: 30 },
  { name: 'Chicken', price: 50 },
];

//to find Total price of all Shopping

let totalAmt = Grosaries.reduce((total, item) => {
  return total + item.price; //(accumulator, element of that array )
}, 0);

console.log(totalAmt); //
