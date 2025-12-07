// const tinderuser=new Object()
const tinderuser={} //object literal syntax


tinderuser.id="123abc"
tinderuser.name="hitesh"
tinderuser.isLoggedIn=false
console.log(tinderuser) //empty object jaise hi array jaisi hoti 

//nested object matlb object k andar object

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:"hitesh choudhary",
        userlastname:"choudhary"
    }
}

console.log(regularUser)
console.log(regularUser.fullname)
console.log(regularUser.fullname.userlastname)

console.log(regularUser.fullname?.userfullname.firstname) //optional chaining
//? ka matlab h ki agr fullname h to hi age firstname ko access krna warna undefined return krdo

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3={obj1,obj2} //nested object
console.log(obj3)
const obj4={...obj1,...obj2} //spread operator to merge two objects
console.log(obj4)

Object.assign(obj1,obj2) //to merge two objects
console.log(obj1)

const obj5=Object.assign(obj1,obj2) //isse naya object banta h inme dono objects ke properties hote h
console.log(obj5)

const obj6=Object.assign({},obj1,obj2) //isse bhi naya object banta h lekin obj1 aur obj2 change ni hote {} se hum ek empty object lete h jisme hum properties copy krte h
console.log(obj6)

const users=[
    {
        userid:"123",
        userEmail:"h1@gmail.com",
    },
    {
        userid:"123",
        userEmail:"h1@gmail.com",
    },
    {
        userid:"123",
        userEmail:"h1@gmail.com",
    },
    {
        userid:"123",
        userEmail:"h1@gmail.com",
    },
    {
        userid:"123",
        userEmail:"h1@gmail.com",
    },
    {
        userid:"123",
        userEmail:"h1@gmail.com",
    },
    {
        userid:"123",
        userEmail:"h1@gmail.com",
    },
    {
        userid:"123",
        userEmail:"h1@gmail.com",
    }
] //yeh array of objects h and hum isme se kisi bhi object ko access kr skte h

users[1].userEmail
console.log(users[1].userEmail)
console.log(tinderuser)

console.log(Object.keys(tinderuser)) //to get all keys of an 
console.log(Object.values(tinderuser)) //to get all values of an 

console.log(Object.entries(tinderuser)) //to get all entries of an object in the form of array of arrays

console.log(tinderuser.hasOwnProperty("name")) //to check if a property exists in an object or not