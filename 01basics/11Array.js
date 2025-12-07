// array 

const Myarr=[0,1,2,3,4,5]
const myHeroes=["shaktiman","naagraj"]

const myArr2=new Array(1,2,3,4,5)
console.log(Myarr[0])

console.log(Myarr[1])

// Array methods
Myarr.push(6)
Myarr.push(7)
console.log(Myarr)

Myarr.pop()

Myarr.unshift(9)

Myarr.shift()
console.log(Myarr)
Myarr.shift()
console.log(Myarr)

console.log(Myarr.includes(6))
console.log(Myarr.indexOf(9))
console.log(Myarr.indexOf(6))

const newArr=Myarr.join()
console.log(newArr)
console.log(typeof newArr)

// slice , splice
console.log("A",Myarr);

const myn1=Myarr.slice(1,3)
console.log(myn1)

console.log("B",Myarr)

const myn2=Myarr.splice(1,3)
console.log(myn2)

console.log("C",Myarr)


