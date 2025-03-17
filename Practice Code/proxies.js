const arr = [1,2,3,4,6]

function negativeIndexing(array){
    return new Proxy(array,{
        get(target,prop){
            // console.log(target)
            // console.log(prop)
            let Index = Number(prop)
            if(Index<0){
                return target[target.length + Index]
            }
            return target[Index]
        },
        set(target, prop, value){
            let Index = Number(prop)
            if(Index<0){
                target[target.length + Index] = value
            }
            else{
                target[Index] = value
            }
            return true
        }
    })
}

const newArr = negativeIndexing(arr)

console.log(newArr[-1])
newArr[-1] = 50
console.log(newArr[-1])

