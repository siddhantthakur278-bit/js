// stack(primitive) memory and heap("Non primitive") memory
let myYoutube_name="siddhantthakur"

let another_name= myYoutube_name
another_name="siddhu"


console.log(myYoutube_name)
console.log(another_name);

let userone={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo=userone
userTwo.email="hitesh@google.com"
console.log(userone.email)
console.log(userTwo.email)
