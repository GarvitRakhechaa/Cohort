let dateElement = document.querySelector('h1')
let dayElement = document.querySelector('h4')


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
    
    dateElement.innerText = `${hours}:${minutes}:${seconds}` 
    dayElement.innerText =   now.toLocaleDateString(undefined,options) 
}



updateTime()
setInterval(updateTime,1000)




