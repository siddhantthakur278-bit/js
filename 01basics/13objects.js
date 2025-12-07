// singleton
 
//object.create //constructor method singleton

//object literal syntax

// myArr=["h","i"]
// myArr=["h","i"]

const mySym=Symbol("key1")


const Jsuser={
    // "name":"hitesh" //esa bhi krte h
    name:"hitesh",
    "full name":"Hitesh Choudhary",
    // mySym:"mykey1",
    [mySym]:"mykey1",
    age:18,
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"] 
}

// console.log(Jsuser.email)
console.log(Jsuser["email"]) //same as above
console.log(Jsuser["full name"])
// console.log(Jsuser.mySym)
console.log(Jsuser[mySym])
console.log(typeof Jsuser[mySym])



Jsuser.email="hitesh@chatgpt.com" //updating
// Object.freeze(Jsuser) //freeze krne k bad kuch update ni kr skte
console.log(Jsuser.email)
Object.email="hitesh@microsoft.com"
console.log(Jsuser.email)

console.log(Jsuser)

Jsuser.greeting=function(){
    console.log("hello js user")
}
// console.log(Jsuser.greeting)
// console.log(Jsuser.greeting()) it is not a funct and we have frozen the object

// console.log(Jsuser.greeting); this will work if not frozen

Jsuser.greeting2=function(){
    console.log(`hello js user ${this.name} welcome back`) //this keyword is used to refer to the current object

}
console.log(Jsuser.greeting());
console.log(Jsuser.greeting2());

