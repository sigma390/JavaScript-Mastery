// new Keyword

let myCar = new Object({ name: 'pp', year: 23 });
console.log(myCar);

//extensivly Used for Date Objects

const date = new Date();
console.log(date);
console.log(date.getFullYear());

//shorthand

const obj = {}; // create Object

//similarliy for arrays
const arr = [];
//or const arr = new Array(1,2,3); same

//===================> This Keyword <=====================

function Car(name, year) {
  this.name = name;
  this.year = year;
  this.getinfo = () => {
    console.log(`name : ${name} and year : ${year}`);
  };
}

const m4 = new Car('m4', 2017);
m4.getinfo();
