let arr = [1,2,3,[4,5,6,[7,8,9]]]



function funonarr(array){
    result = []
    for(i= 0;i<array.length;i++){
        if(typeof array[i] === "object" ){
            funonarr(array[i])
        }
        
        result.push(array[i])
    }
    return result
}

let value = funonarr(arr)

console.log(value)
