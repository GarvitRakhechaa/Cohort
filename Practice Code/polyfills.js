const arr = [1,2,3,4]
const st = "Garvit"
if(!Array.prototype.myPopr){
    Array.prototype.myPopr = function(){
        this.length = this.length-1
        return this.length
    }
}
if(!String.prototype.isString){
    String.prototype.isString = function(){
        if(typeof this === "string")
            return true
        else {
            return false
        }
    }
}

if(!Array.prototype.myFind){
    Array.prototype.myFind = function(userfn){
        let result 
        for(let i = 0; i<this.length; i++){
             if(userfn(this[i])){
                return result = this[i]
            }
        }
        return result
    }
}

if(!Array.prototype.myReduce){
    Array.prototype.myReduce = function(callback, initialvalue){
        let acc = initialvalue
        let Index = 0
        if(initialvalue === undefined){
            Index = 1
            acc = this[0]
        }
        for(let i = Index;i<this.length;i++){
           acc = callback(acc, this[i])
           console.log(acc)
        }
        return acc
    }
}

const sum = arr.myReduce((acc, curr) => acc + curr, 0);
console.log(sum)
// if (!Array.prototype.myFlat) {
//     Array.prototype.myFlat = function(depth = 1) {
//         const newArr = [];
        
//         function flatten(arr, count) {
//             for (let i = 0; i < arr.length; i++) {
//                 if (Array.isArray(arr[i]) && count < depth) {
//                     flatten(arr[i], count + 1);  // 🔁 Recursion with increased count
//                 } else {
//                     newArr.push(arr[i]);  // ✅ Push only non-array elements
//                 }
//             }
//         }
//         flatten(this, 0);
//         return newArr;
//     };
// }
        
            



// let res = arr.find((e) => e/2 == 3)
let res = arr.myFind((e) => e/2 == 3)

// console.log(arr.push(0))
//  const value = arr.myPopr()
// const value = arr.pop()
const value2 = arr.myPopr()
console.log(arr)
// console.log(value)
console.log(value2)
console.log(res)
console.log(Array.isArray(arr[1]))
// console.log([1,2,3[1,2,3[1,2,3]]].myFlat())
console.log(st.isString())


