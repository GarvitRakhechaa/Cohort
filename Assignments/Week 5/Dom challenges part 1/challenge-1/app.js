document.addEventListener("DOMContentLoaded", function () {
    
let toggleButton = document.getElementById('toggleButton')
let status = document.getElementById('status')
let bulb = document.getElementById('bulb')
console.log(bulb)

console.log(toggleButton)
toggleButton.addEventListener('click', darkMode)

function darkMode(){
    console.log("buttonclicked")
    if(toggleButton.innerText === "Turn Off"){
    toggleButton.innerText = "Turn On"
    status.innerText = "Status: Off"
    document.body.classList.remove('dark-mode')
    bulb.classList.add("off")
    }
    else{
    toggleButton.innerText = "Turn Off"
    status.innerText = "Status: On"
    document.body.classList = "dark-mode"
    bulb.classList.remove('off')

    }

}
})