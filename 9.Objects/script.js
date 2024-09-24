//=======================> Objects <=======================

let person = {
  firstName: 'Om',
  lastName: 'Patil',
  age: 23,
  city: 'Kolhapur',
  car: {
    brand: 'Nissan',
    model: 'GTR',
    year: 2017,
  },
};

//Accessin g A object , uyse dot notation

console.log(person.firstName); //Om
console.log(person.car.brand); //Nissan

//UPDATE and Add props
let man = {
  gender: 'male',
};

man.age = 28; //add age prop to Man object
man.responsibilities = {
  work: 'Developer',
  hobby: 'Reading',
};
console.log(man);

// Square bracket Notation to Access the props of Object
console.log(man['age']); // must print 28

//==========> methods of Object <==============

const myObj = {
  myMethod: () => {}, //arrow
  myMethod1: function () {
    //normal
  },
  myMethod3() {
    //fancy
  },
};
const cat = {};

const dog = {
  name: 'Fluffy',
  age: 4,
  color: 'Golden',
  bark: () => {
    console.log('Woof Woof');
  },
  listAllProps: function () {
    console.log(
      ` Name is : ${this.name}\n Age is : ${this.age}\n Color is : ${this.color}\n`
    );
  },
};

dog.bark(); //Woof Woof

//to show All props of A object
dog.listAllProps();
