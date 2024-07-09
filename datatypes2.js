//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);


// stack and heap
// stack(primitive ) and heap(non-primitive)
let myYoutube = "cs@gmail.com"
let anotherName = myYoutube

anotherName = "C@gmail.com"

console.log(myYoutube);
console.log(anotherName);


let userOne = {
    email: "cs@gmail.com",
    upi: "123@upi"
}

let userTwo = userOne
userTwo.email = "c@gmail.com"

console.log(userOne);
console.log(userTwo);