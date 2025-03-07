let container = document.getElementById('container')
let calculate = document.getElementById('calculate')
let result = document.getElementById('result')
let history = document.getElementById('history')
console.log(container)



const arr = ["AC", "/", "*", "+",
   7, 8, 9, 4, 5, 6, "-",
   1, 2, 3,
   0, ".", "del", "="]

arr.map((item) => {
   let button = document.createElement('button')
   button.textContent = item
   button.id = `${item}`
   container.appendChild(button)
   // button.addEventListener('keydown',addvalue)
   button.addEventListener("click", value)
})


function addvalue(event) {
   alert("button clicked")

}
function value() {

   if (this.innerText === "=") {
      console.log(calculate.innerText)
      let calValue = eval(calculate.innerText)
      result.innerText = calValue === "Infinity"  ? "Cant divide by 0" : calValue
      let p = document.createElement('p')
      let pValue = `${calculate.innerText} = ${result.innerText}`
      console.log(pValue)
      p.innerText = `${calculate.innerText} = ${result.innerText}` === " = undefined" ? "" : `${calculate.innerText} = ${result.innerText}`
      history.appendChild(p)
      calculate.innerText = ''

      if(result.innerText ==="undefined"){
         result.innerText = ''
      }
   }
   else if (this.innerText === "AC") {
      calculate.innerText = ""
      result.innerText = ""
   }
   else if (this.innerText === "del") {
      calculate.innerText = calculate.innerText.slice(0, calculate.innerText.length - 1)
   }
   else {
      result.innerText = ''
      calculate.innerText = `${calculate.innerText}${this.innerText}`
   }
}


