//====================> use Of sPREAD oPERATOER

const func = (...args) => {
  console.log(args);
  return args.reduce((acc, args) => {
    return acc + args;
  }, 0);
};
console.log(func(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//================> About MUTATION <===============
const nums = [1, 2, 3, 4, 5, 6];
nums.push(8); // this si Wrong , never muatate Original things
//instead

const newNums = [...nums, 12];
console.log(newNums);

//=================> With objects <-============

const dog = {
  name: 'Roxxy',
  breed: 'German ',
  age: 2,
};
const newDog = { ...dog, age: 14 };

console.log(newDog);
