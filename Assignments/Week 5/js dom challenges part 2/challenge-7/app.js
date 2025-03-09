accordianButton = document.querySelectorAll('.accordion-item')


// console.log(accordianButton);

for(i = 0;i<accordianButton.length; i++){
    accordianButton[i].addEventListener('click', function(){
        // accordianButton.forEach(element => {
        //     if(accordianButton[i]){
        //         console.log("class nhi hati")
        //     }else{
        //     element.classList.remove('active')
        //     }
        // });
        if(!this.classList.contains('active')){
            this.classList.add('active')
            console.log("class add hui hai")
            accordianButton.forEach(element => {
                if(this === element){
                    console.log('esme class abhi add hui hai')
                }
                else{
                element.classList.remove('active')
                console.log('saari classes remove ho gyi hai')
                }
            });
        }
        else{
            this.classList.remove('active')
            console.log("class remove hui hai")
        // accordianButton.forEach(element => {
        //     if(accordianButton[i]){
        //         console.log("class nhi hati")
        //     }else{
        //     element.classList.remove('active')
        //     }
        // });

        }
    //    list =  this.children[1]
    //    console.log(list.classList);
    //    list.classList.add('active')
       
    })
}