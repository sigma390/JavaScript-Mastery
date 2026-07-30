
console.log("Global 1")

const a = async () => {
    console.log("A")
    // whatever comes after await goes in Microtask Queue
    await Promise.resolve("Heyll")
    console.log("B")


}


a()
console.log("Global 2")

// Async returns and Promise


async function B() {

    return "Hello";
}

const a1 = await B()
async function b() {
    return new Promise((resolve, reject) => {
        resolve("Hello")
    })
}

//Both are same

const a2 = await b()

console.log(a1, " | ", a2)