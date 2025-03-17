let colorInput = document.querySelector("#colorInput")
let mainButton = document.querySelector("#mainButton")
let main = document.querySelector('#allButtons')
const body = document.querySelector('body');



mainButton.addEventListener("click", () => {
    let inputValue = colorInput.value
    if (inputValue.trim() === "") {
        alert("enter color")
    }
    else {
        colorButtonfunction = createColorButton(inputValue)
        colorButtonfunction()

    }
})

function createColorButton(inputValue) {
    let colorButton = document.createElement('button')
    colorButton.textContent = inputValue
    colorButton.className = "mainnButton"
    colorButton.style.backgroundColor = inputValue
    main.appendChild(colorButton)
    return function () {
        colorButton.addEventListener("click", () => {
            body.style.backgroundColor = inputValue
        })
    }
}



