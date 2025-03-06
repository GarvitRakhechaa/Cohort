// Function.prototype.describe = function (){
//     console.log(`this function describe ${this.name}`)
// }

// function greet(name){
//    return `hello ${name}`
// }

// let value = greet.describe()



value =  function createCounter() {
    let count = 0
    return function(){
        count++
        return count
    }
}()

console.log(value())
console.log(value())
console.log(value())
// a = x()
// b = y ()
// console.log(a)
// console.log(b)