// let redButton = document.getElementById("redButton")
// let greenButton = document.getElementById('greenButton')
// let blueButton = document.getElementById('blueButton')
// let purpleButton = document.getElementById('purpleButton')
// let resetButton = document.getElementById('resetButton')

let heading = document.getElementById('mainHeading')

let button = document.getElementsByTagName('button')

console.log(button)

for (let index = 0; index < button.length; index++) {
    const element = button[index];
    element.addEventListener('click', changeColor)
}

function changeColor(){
    if(this.innerText === "Reset"){
        heading.style.color = "black"
    }
    else{
    heading.style.color = this.innerText
    }
    

}