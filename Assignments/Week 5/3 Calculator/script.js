// document.addEventListener("DOMContentLoaded", function () {

// console.log(container)
//     heading = document.createElement('h1')
//     heading.innerHTML = "garvit is good boy"
//     container.appendChild("h1")
// })

let container = document.getElementById('container') 
console.log(container)


const arr = [1,2,3,4,5,6,7,8,9,0]

arr.map((item)=>{
   let button = document.createElement('button')
   button.textContent = item
   container.appendChild(button)
})

// for(i = 0 ; i<arr.length;i++){
//     let heading = document.createElement('h1')
//     heading.innerHTML = "Garvit is good boy"
//     container.appendChild(heading)
//     console.log(arr[i])
// }
