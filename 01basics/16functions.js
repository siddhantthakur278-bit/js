// function is simply a reusable block of code that performs a specific task
// Functions can take inputs (parameters) and can return outputs (return values)

//diffrence btw parameters and arguments
//Parameters are the names listed in the function definition
//Arguments are the real values passed to the function
function sayMyName(){
console.log("H")
console.log("I")
console.log("T")
console.log("E")
console.log("S")
console.log("H")
}

sayMyName()


function addTwoNumbers(num1,num2){
    console.log(num1+num2)
    return num1+num2
    
}

addTwoNumbers() //NaN bcz humne kuch pass ni kiya h
addTwoNumbers(5,10) //15
addTwoNumbers(3,"4")//"34" bcz js me + operator dono ko jodta h agar ek string h to dono ko string me convert kr deta h
addTwoNumbers("5","a") //"5a"
addTwoNumbers(0.1,0.2) //0.30000000000000004 bcz of floating point precision issue 
addTwoNumbers(-5,10) //5
addTwoNumbers(-5,-10) //-15
addTwoNumbers(3,null) //3 bcz null is treated as 0 in numeric context
addTwoNumbers(3,undefined) //NaN bcz undefined is not a number

//in the above code parameters are num1 and num2 and arguments are the values we pass while calling the function like 5 and 10
const result=addTwoNumbers(20,30)
console.log("result is ",result)

// but answer undefined tab aata jab hum return ni krte h function me to by default function undefined return krta h

function loginUserMessage(username="default user",message="welcome to js course"){
    return `Hello ${username}, ${message}`
}

loginUserMessage() //Hello default user, welcome to js course
console.log(loginUserMessage())
console.log(loginUserMessage("Hitesh","LOGGED IN")) //Hello Hitesh, welcome to js course
//agar mai default value nhi rakhta and fir empty chhod deta to undefined aata
