

// this Key word => means who is calling 

const greet = () => {
    console.log(`Hellow my Name is ${this.name}`)
}

function greet1() {
    console.log(this.name)
}


const person = {
    name: "Omkar",
    greet
}

const admin = {
    name: "Admin"
}
admin.greetFromAdminArrow = greet;
admin.greetFromAdminNormal = greet1;

admin.greetFromAdminArrow() // it will print undefined because arrow function has lexical this means they are bound to the calling env
admin.greetFromAdminNormal() // it will pr int admin



//=================> Tricky Question <==================


const person1 = {
    name: "Omkar",
    greet() {
        console.log(this.name);
    }
}

const fn = person1.greet;

fn() //will print undefined cause who called the function there is no one 

//basically fn = {} ;