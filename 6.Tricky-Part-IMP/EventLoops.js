// Defn : mechanism that allow js tp perform Async operations by moving callbacks
// from Task Queues to call stack by giving Priority to Microtask over Macro task


console.log("A");

setTimeout(() => { console.log("B") }, 1000);
setInterval(() => {
    let i = 2;
    while (i < 3) {
        console.log("C")
        i++;

    }
}, 2000);

Promise.resolve().then(() => { console.log("Promise resolved D"), setTimeout(() => console.log("Inside Promise E"), 0) });

Promise.resolve().then(() => console.log("second Promise F"));

console.log("G")

// A , G , Promise Resolved D  , Second Promise F , Inside Promise E (BEACUSE ITS scheduled at 0 ms if it was more than that of B then it would have been in Queue after B) , B, C.....