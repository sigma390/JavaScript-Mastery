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


// real examples

//=================> 1.Counter <===================

const counter = () => {

  let count = 0;

  return () => {
    count += 1;
    return count;
  }

}

const increment = counter();
console.log(increment());

//============> Encapsulation Example <==============

function encap() {
  const sum = 10;
  const name = "Omkar";


  return {
    doubleTheSum: function () {
      return 2 * sum;
    },
    sayMyName: () => {
      return name;
    }

  }

};

const resultt = encap();
console.log(resultt.doubleTheSum())
console.log(resultt.sayMyName())


//=============> Factory Function <=========

const GenerateFacFxn = (factor) => {
  return function (number) {
    return factor * number
  }
}

const FacFxnGenerator = GenerateFacFxn(13);

console.log(FacFxnGenerator(100))