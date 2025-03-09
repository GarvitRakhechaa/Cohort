let nameInput = document.getElementById('nameInput')
let jobInput = document.getElementById('jobInput')
let ageInput = document.getElementById('ageInput')
let bioInput = document.getElementById('bioInput')
let nameDisplay = document.getElementById('nameDisplay')
let jobDisplay = document.getElementById('jobDisplay')
let ageDisplay = document.getElementById('ageDisplay')
let bioDisplay = document.getElementById('bioDisplay')


nameInput.addEventListener('input',updateName)

function updateName(event){
    nameDisplay.innerText = event.target.value || "Not Provided"
}
jobInput.addEventListener('input',updateJob)
function updateJob(event){
    jobDisplay.innerText = event.target.value || "Not Provided"
}

ageInput.addEventListener('input',updateAge)
function updateAge(event){
    ageDisplay.innerText = event.target.value || "Not Provided"
}

bioInput.addEventListener('input',updateBio)
function updateBio(event){
    bioDisplay.innerText = event.target.value || "Not Provided"
}