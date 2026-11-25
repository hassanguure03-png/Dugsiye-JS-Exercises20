// const fruits = [ "xasan", "axmed"]
// fruits.forEach((fruit)=> {
//     console.log( "waxaan ka helay " + fruit )
// })

// const xasan =[ "Apple", "Yaanyo","mango", "Axmed"]
// xasan.forEach((xasan)=> {
//     console.log("waxa helay  " + xasan)
// })

// console.log("-----------")

// xasan.forEach((function(xasan){
//     console.log("waxa helay  " + xasan)
// }))
// const numbers = [1,2,3,4,5,];
// numbers.forEach((number)=>{
//     console.log("Show me the numbers " + number)
// })

// const numbers = [1,2,3,4,5,];
// const newNumbers = numbers.map((number)=> number * 3);
// console.log(newNumbers)

const fruits = ["apple", "banana", "cherry"];
const lengths = fruits.map((function(fruit) {
    return fruit.length;
}))
console.log (lengths)