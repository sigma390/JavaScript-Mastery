// Afunction Can return A function and that Function has Access to All
//Vars of Parent Function Even though Its cALLED outside of Function

const Outer = () => {
  let first = 'Omakar';

  const Inner = () => {
    let last = 'Patil';
    console.log(first, last);
  };
  //returning the Inner Function
  return Inner;
};

const innerFxn = Outer();
innerFxn();
