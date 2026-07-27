//========================> Execution Context <=====================

// workspace made to execute code
// call stack=> hold those workspaces

//========================> PHASE of execution <=====================
// 1. Memory creation
// 2. Execution Phase

//=> 1. Memory Creation
// vars are inintialised to undefined , let are UNINITIALISED , functions are Stored Completely

// example

var x = 10; // in memory creation phase x = undefined
let y = "Hellow" // y = <uninitialsed>

function go() {   // stored completly even before its declared
    console.log("Lets go")

}

//=> 2.Executrion Phase
// in this phase It Execute the code line by line

var a = 10




//=======================> Function Execution Context <================================
// new execution context is created when a function is called 

function new_call() {
    console.log("new execution context is created")
}

new_call()


//=====================> Why recursion Often fails <=========================
// because there is limited space on call stack and thats why each call gets appended to stack so there is no end 