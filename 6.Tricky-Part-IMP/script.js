//global Scope

let name1 = 'Pappu';

const ShowName = () => {
  console.log(name1);
};

ShowName(); // Output: Pappu

//=========================> Local Scope  / Function Scope <========================

const func = () => {
  let x = 10;
  console.log(x);
};
func(); //Prints 10
// console.log(x); produces Not defined Error

//inner And Outer Function

const outerFunc = () => {
  const a = 11;
  console.log(a);
  const innerFunc = () => {
    console.log(a);
    let b = 100;
  };
  //   console.log(b); //gives error
  //call to inner Function
  innerFunc(); // prints 10
};
//call to Outer Function

outerFunc(); // prints 10

//=========================> Block Scope <========================

if (true) {
  let name = 'Madison Beer';
  console.log(name); //Only Accessible Inside THE BLOCK
}
