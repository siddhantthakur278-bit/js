// Primitive 
// 7 types: strings,Number,Boolean,Null,Undefined,Symbol,BignInt
const score=100;
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id=== anotherId);

const BigNumber=24436575432345678n

// Refrence Type (Non - Primitive)

// Array,Objects,Functions
const heroes=["shaktiman","naagraj","doga"]
let myObj={
    name: "hitesh",
    age:22,
}

const myFunction=function(){
    console.log("Hello World");

}
console.log(typeof BigNumber)
console.log(typeof myFunction)


