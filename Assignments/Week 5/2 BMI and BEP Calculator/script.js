document.addEventListener("DOMContentLoaded", function () {
    // let ageELement =    document.getElementById('age')
    let heightInput = document.getElementById('height')
    let weightInput = document.getElementById('weight')
    let calculateBmiButton = document.getElementById('bmi')
    let resultHeading = document.querySelector('h2')
    let bmicontainer = document.getElementById('bmicontainer')
    let container = document.getElementById('container')
    // let heightLabel = document.getElementById("heightlabel")
    // let weightLabel = document.getElementById("weightlabel")



    function calculateBMI() {

        if (heightInput.value === "" || weightInput.value === "") {
            alert("fill all values")
        } else {

            let bfpResultElement = document.getElementById('BFpResult')

            if (bfpResultElement) {
                bfpResultElement.remove()
            } 
                // let age = ageELement.value

                let calculateBFPButton = document.getElementById('CLicktoBFP')
                if (calculateBFPButton) {
                    calculateBFPButton.remove()
                }
                const bmiValue = ((weightInput.value / (heightInput.value * heightInput.value))).toFixed(2)

                resultHeading.innerText = `your bmiValue Result is ${bmiValue}`
                heightInput.value = ""
                weightInput.value = ""
                //     //  heightLabel.remove()
                //     //  weightLabel.remove()
                //     //  calculateBmiButton.remove()
                let bfpContainer = document.createElement('div')
                bfpContainer.id = 'BFPContainer'
                container.appendChild(bfpContainer)
                
                let BFP = document.createElement('button')
                BFP.id = "CLicktoBFP"
                BFP.innerText = "Click here to calculate Body Fat percentage"
                bmicontainer.appendChild(BFP)
                
                BFP.addEventListener("click", () => {

                    BFP.remove()
                    calculateBmiButton.disabled = true



                    let gender = document.createElement('select')
                    // gender.id = "gender"
                    gender.classList = "addition"
                    let option1 = document.createElement('option')
                    option1.value = "Male"
                    option1.selected = ""
                    option1.innerText = "Male"

                    let option2 = document.createElement('option')
                    option2.innerText = "Female"
                    option2.value = "Female"

                    gender.appendChild(option1)
                    gender.appendChild(option2)
                    bmicontainer.appendChild(gender)

                    let ageLabel = document.createElement('label')
                    ageLabel.for = "agenikal"
                    ageLabel.innerText = "Enter your age"

                    let age = document.createElement('input')
                    age.name = "agenikal"
                    age.placeholder = "enter your age "
                    age.type = "number"
                    age.classList = "input"

                    bmicontainer.appendChild(ageLabel)
                    bmicontainer.appendChild(age)

                    let bfpButton = document.createElement('button')
                    bfpButton.innerText = "calculate your Body Fat Percentage"

                    bmicontainer.appendChild(bfpButton)
                    let bfpResult = document.createElement('h2')
                    bfpResult.id = "BFpResult"
                    bfpResult.classList = "text"
                    bfpResult.innerText = "Result will come here"
                    bmicontainer.appendChild(bfpResult)


                    bfpButton.addEventListener('click', () => {
                        if (age.value === "") {
                            alert("please fill your age")
                        }
                        else {
                            if (gender.value == "Male") {
                                let resultforfemale = ((1.20 * bmiValue) + (0.33 * age.value) - 16.2).toFixed(2)
                                bfpResult.innerText = `your BFP Result is ${resultforfemale}`
                            } else {
                                let resultformale = ((1.20 * bmiValue) + (0.33 * age.value) - 5.4).toFixed(2)
                                bfpResult.innerText = `your BFP Result is ${resultformale}`
                            }
                            gender.remove()
                            ageLabel.remove()
                            age.remove()
                            bfpButton.remove()
                            calculateBmiButton.disabled = false
                        }
                    })
                })
            }
        }

        calculateBmiButton.addEventListener("click", calculateBMI)

    })