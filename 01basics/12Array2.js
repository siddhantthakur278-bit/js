const marvel_heroes = [ "Thor", "Ironman", "Spiderman"]
console.log(marvel_heroes)
const dc_heroes = ["superman","flash","batman"]
console.log(dc_heroes)

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes.length)
// console.log(marvel_heroes[3])
// console.log(marvel_heroes[3][1])

// const allHeroes=marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes)
// console.log(allHeroes)

const allHeroes=[...marvel_heroes, ...dc_heroes]
console.log(allHeroes)

const another_arr = [1,2,3,4,5,6,7,8,9]
console.log(another_arr)

const another_arr2 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_arr2 = another_arr2.flat(Infinity)
console.log(real_another_arr2)


console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"hitesh"})) //interesting

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))

