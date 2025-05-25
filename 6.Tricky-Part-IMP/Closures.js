/* Afunction Can return A function and that Function has Access to All
Vars of Parent Function Even though Its cALLED outside of Function 
*/

const Outer = () => {
  let first = 'Omkar';

  const Inner = () => {
    let last = 'Patil';
    console.log(first, last);
  };
  //returning the Inner Function
  return Inner;
};

const innerFxn = Outer();
innerFxn();

// Applications Of Closures
//1. Data Encapsulation and Privacy
// Some Private vars can be used outside They are Declared

function a() {
  const b = 10;
  const c = 'Dog aND Cat are Friends';

  return {
    doubleIt: () => {
      console.log(b * 2);
    },
    SayTheFact: () => {
      console.log(c);
    },
  };
}

const result = a();
result.doubleIt();
result.SayTheFact();

//2. factory Functions
// functions that will generate A Specialised Fuctions

function GiveFactoryFucntion(factor) {
  return {
    factoryFunction: (number) => {
      return number * factor;
    },
  };
}

const double = GiveFactoryFucntion(2);
const triple = GiveFactoryFucntion(3);
const quadruple = GiveFactoryFucntion(4);

console.log(double.factoryFunction(5)); //10
console.log(triple.factoryFunction(5)); //15
console.log(quadruple.factoryFunction(5)); //20
