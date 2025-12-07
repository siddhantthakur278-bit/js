const course={
    courseName:"React JS",
    price:9999,
    duration:"3 months",
    instructor:"John Doe"
} //ye ek object h jisme humne course ke details diye 

// course.instructor

const {instructor}=course
console.log(instructor) //object destructuring matlb hum object ke andar se kisi property ko alag variable me store kr skte \

const{instructor:courseInstructor,price}=course //isme humne instructor ko courseInstructor naam se store kiya h isi ko bolte h aliasing
console.log(courseInstructor)

// const navbar=({company})=>{

// }
// navbar(company="hitesh") //yeh ek function h jisme humne object destructuring kiya h

//now concept of API and Api ka matlb
//API=Application Programming Interface
//API ek aisa interface hota h jiske through do applications ek dusre se communicate krte h
//jab hum kisi website se data fetch krte h to wo data API ke through hi aata h

//example of API
//https://jsonplaceholder.typicode.com/posts
//yeh ek fake API h jisme hum posts ka data fetch kr skte h

//fetching data from API using fetch method
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(error=>console.log(error))

//JSON=JavaScript Object Notation
//JSON ek aisa format h jisme hum data ko store krte h
//JSON me data ko key-value pair me store kiya jata h
//JSON me keys hamesha string hoti h aur values kisi bhi type ki ho skti h

//example of JSON
// {
//     "name":"hitesh",
//     "coursename":"JS",
//     "price":"free"
// };
//isse hum object literal syntax me likhte h lekin jab hum ise API ke through bhejte h to ise JSON format me bhejte h

//JSON me array of objects bhi ho skta h

// [
//     {},
//     {},
//     {},
//     {},
//     {},
// ] 


