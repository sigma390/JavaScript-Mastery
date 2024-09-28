class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const p1 = new Person('Om', 24);
console.log(p1);

//use of function al mEthod

const createUser = (name, age) => ({ name, age });
const p2 = createUser('Neena', 21);
console.log(p2);
