let digitalclock = document.querySelector('.digital-clock')
let dates = document.querySelector('.date')
let hourss = document.querySelector('.hour')
let minutess = document.querySelector('.minute')
let seondss = document.querySelector('.second')
function updateTime(){
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };

      function timeFormater(target){
        return  target <10 ? "0"+target : target
      }
    const now = new Date()  //Date ke liye new  mujhe date ko har baar call karna padega new value ke liye 
    let hours = timeFormater(now.getHours() % 12 || 12)
    let minutes = timeFormater(now.getMinutes())
    let seconds = timeFormater(now.getSeconds())
    
    digitalclock.innerText = `${hours}:${minutes}:${seconds}` 
    dates.innerText =   now.toLocaleDateString(undefined,options) 
      hourss.style.transform = `rotate(${hours * 30 + minutes * 0.5 + seconds * (0.5 / 60)}deg)`
      minutess.style.transform = `rotate(${minutes * 6 + seconds * 0.1}deg)`;
      seondss.style.transform = `rotate(${seconds * 6}deg)`
      

}



updateTime()
setInterval(updateTime,1000)


const clock = document.querySelector(".clock");
const radius = 125; // Distance from center

for (let i = 1; i <= 12; i++) {
    let angle = (i * 30 - 90) * (Math.PI / 180); // -90 shift to start from top
    let x = radius * Math.cos(angle);
    let y = radius * Math.sin(angle);

    let numDiv = document.createElement("div");
    numDiv.className = "number";
    numDiv.innerText = i;
    numDiv.style.position = "absolute";
    numDiv.style.left = `calc(6% + ${x}px - 15px)`;
    numDiv.style.top = `calc(43.5% + ${y}px - 15px)`;
    clock.appendChild(numDiv);
}







