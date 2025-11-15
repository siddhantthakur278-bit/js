const accountId = 144553
let accountEmail = "siddhantthakur@gmail.com"
var accountPassword= "12345"
accountCity = "Jaipur"

let accountState;
/*
prefer not to use var 
because of issue in block scope and functional scope
*/
// accountId = 2  //not allowed
console.log(accountId);
accountEmail="hc@hc.com"
console.log(accountEmail)
accountPassword="12121121"
accountCity="banglore"

console.log(accountEmail)
console.log(accountCity)
console.log(accountPassword)
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])