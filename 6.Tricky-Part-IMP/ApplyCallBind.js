





//=============> function.call(thisarg, ...args)
function greet(age, city) {
    console.log(this.name, age, city)
}

const user = {
    name: "Omkar"
}

greet.call(user, 25, "Belguam")

const args = [25, "Chandgad"]

greet.call(user, ...args) //spread operator



//===================> Apply() <=======================

greet.apply(user, args) // or we can do like function.apply()


//===================> Bind() <==========================
//returns a function for which this is fixed


const fn = greet.bind(user, 35, "Goa");

console.log(typeof fn)

fn()