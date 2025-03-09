let togglebtn = document.querySelector(".toggle-btn")
let Panel = document.querySelector(".panel")
let closeBtn = document.querySelector(".close-btn")
let menuitems = document.getElementsByClassName("menu-item")

togglebtn.addEventListener('click', function(){
    Panel.classList.add('active')
    event.stopPropagation()
    console.log(Panel)
})
closeBtn.addEventListener('click', function(){
    Panel.classList.remove('active')
})

for(i = 0;i<menuitems.length;i++){
    menuitems[i].addEventListener('click', function(){
        Panel.classList.remove('active')
        alert(`${this.innerText} menu item was clicked`)
    })
}

window.addEventListener('click' ,function(){
    if(Panel.classList.contains("active")){
        Panel.classList.remove('active')
        console.log("ab menu item gayab hoga")
    }
})