//=====================> Object Destructuring =================

const person = {
  name: {
    first: 'Omkar',
    last: 'Patil',
  },
  age: 23,
  cars: {
    bmw: {
      model: 'm4 Comp',
      year: 2018,
    },
    thar: {
      model: '4ST 4X4 HT',
      year: 2021,
    },
  },
  animals: {
    cat: {
      name: 'Meow Meow',
      age: 2,
    },
  },
};

//===========> Old way

const namee = person.name.first;
const agee = person.age;
const bmwModell = person.cars.bmw.model;
const tharModell = person.cars.thar.model;
const catNamee = person.animals.cat.name;
console.log(namee, agee, bmwModell, tharModell, catNamee);

//===========> New way
const {
  name: { first },
  age,
  cars: {
    bmw: { model: bmwModel },
    thar: { model: tharModel },
  },
  animals: {
    cat: { name: catName },
  },
} = person;

console.log(first, age, bmwModel, tharModel, catName);

//====================> Array Destructuring <================

const intro = ['Hi', 'there', 'i'];
const [f, s, t] = intro; //f corresponds to 0th index in array
console.log(f, s, t);
