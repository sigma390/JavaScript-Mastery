// Value vs referances

//for Primitive Types Like number , String Bools

let a = 5;
let b = a;
a = 10;
console.log(b); // output: 5
console.log(a); // output: 10 //=======>  pass by Value

//BUT FOR Objects , Arrays Unions, enums they are passed by reference

let arr = ['Omkar', 'PATIL'];

let c = arr;
arr.push('2GI21CS106');
console.log(arr);
console.log(c); //actually it Should have ['Omkar', 'PATIL'];

const person = {
  firstName: 'jane',
  lastName: 'doe',
};
let person2 = person;
person.firstName = 'Nisha';
console.log(person);
console.log(person2);

//======================> Shallow Cloning <=============== (works for Array as Well as Objects)

//===========> 1st Way
//Spread operater

let originalArr = [1, 2, 3, 4, 5, 6];
let newArray = [...originalArr]; //copies All elements of Original Array to new Aarray

newArray.push(7);

console.log(originalArr); //output: [1,2,3,4,5,6]

//===========> 2nd WAY

let originalArr2 = [1, 2, 3, 4, 5, 6];
let newArray2 = originalArr2.slice(); //copies All elements of Original Array to new Aarray

newArray2.push(7);
console.log(originalArr2); //
console.log(newArray2);

//Object ASSIGN works for only Objects Object.asssign({}, objectOriginal)

//======================> Deep Cloning <=============== (works for Array as Well as Objects)

const person11 = {
  firstname: 'Emma',
  car: {
    brand: 'BMW',
    color: 'black',
    wheels: 4,
  },
};

const women = { ...person11, car: { ...person11.car } }; //Works Only for 2levels

//dEEP Cloning for objects more than , 2 levels use json.stringify and json.parse
let Anna = JSON.parse(JSON.stringify(person11));
console.log(Anna);
