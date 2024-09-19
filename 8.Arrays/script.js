//basics

let values = ['one', 2, { name: 'Three' }];

console.log(values[2].name);

//===================> Array Methods <================

//Always Name Arrays Plural , names ,  values , Shoes ,  men

let arr = ['one', 'two', 'three'];

//==========> 1. Push Array <============ At end //returns length of array

arr.push('four');

console.log(arr);

//==========> 2. Pop Array <============ end Element is Removed //returns Removed Value
arr.pop();
console.log(arr);

//==========> 3. Shift Array <============ First Element is Removed //returns Removed Value

arr.shift();
console.log(arr);

//==========> 4. Unshift Array <============ Add Element at Start //returns length of array

arr.unshift('zero');
console.log(arr);

//==========> 5. Splice <============ replace or Remove or Add new Elements

arr.splice(2, 0, 'two', 'three'); // (index, how many to remove, add values)
console.log(arr);
//starts from 2 and remove 0 elements And insert two and three

//==========> 6. Slice <============ copy Array

let copiedArr = arr.slice(2); //everything including index 2 is Kept to new Array ,
//additionally We can Specify Last Indedx Also .slice(start,end);
console.log(copiedArr);

//===========> 7. Reverse <=============
let reversedArr = arr.reverse();
console.log(reversedArr);

//==========> 8. Concat <============= combine two arrays

let arr1 = ['a', 'b', 'c'];
let arr2 = ['d', 'e', 'f'];

let combinedArr = arr1.concat(arr2);
console.log(combinedArr);

//==========> 9. Join <============= convert Array to String

let joinedArr = combinedArr.join('-');
console.log(joinedArr);
