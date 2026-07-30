


// whats a Promise => an Object 

// mental model

// {
//     state : "pending",
//     value : undefined ,
//     fullFilledReactions :[],
//     rejectReactions :[]
// }

// executor => execute immediatly 


//example

console.log("A");

const promise = new Promise((resolve, reject) => {
    // resolve("Hellow resolved"); //once resolved the state is settled which is fullfilled in this case
    reject("Rejected") // it ignores this line

}) // meaning Promise given value of a Strig "Hellow resolved"

promise.then((value) => console.log(value)).catch((value) => console.log(value))

console.log("B")


// example 

new Promise((resolve, reject) => {
    reject("error")
}).then((val) => {
    console.log("Then : ", val)
}).catch((err) => console.log("Catch : ", err))


//tricky Question

Promise.resolve("A").then((val) => { //resolve ("A")=> Promise.value = "A", 
    console.log(val); // prints A , returns B to new PROMISE const prom2 = new Prom1();
    return "B";
}).then((val) => { // basically this is Promise 2
    console.log(val);

    return "C";
}).then((val) => { //this is Promise 3
    console.log(val);
    return "D"
})

const promise1 = Promise.resolve("A");

const promise2 = promise1.then((val) => {
    console.log(val);
    return "B";
});

// Internally it's roughly like:
const promise2 = new Promise((resolve) => {
    // wait for promise1...
    const result = callback("A");   // result = "B"
    resolve(result);                // promise2 becomes fulfilled with "B"
});


