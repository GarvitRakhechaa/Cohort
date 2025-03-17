let Submit = document.getElementById('Submit')
let Name = document.getElementById('name')
let title = document.getElementById('title')
let review = document.getElementById('review')
let reviewSection = document.getElementById('reviewSection')
let imogies = ["😡", "😞", "😐", "🙂", "😃"]
let mainImogies = document.querySelectorAll('.imogiees')
let str = ""


document.addEventListener('DOMContentLoaded',loadFromLocalStorage)


mainImogies.forEach(emogy => emogy.addEventListener("click", function () {
        str = ""
        mainImogies.forEach(e => e.classList.remove("circle"));
        this.classList = "circle"
        console.log(this.id)

        for (i = 0; i < this.id; i++) {
                str = `${str} ⭐`
                console.log(str)
        }
}));
Submit.addEventListener("click", updateReview)

function createrReviewElement(now,TITLE,REVIEW,NAME,EMOGY){
        let ReviewInfo = document.createElement('div')
                ReviewInfo.classList = "reviewInfo"
                let h1 = document.createElement('h1')
                let imogie = document.createElement('h1')
                let p1 = document.createElement('p')
                let h4 = document.createElement('h4')
                let p2 = document.createElement('p')

                h1.innerText = title.value
                title.value = ""
                console.log(TITLE)

                imogie.innerText = str
                str = ""
                p1.innerText = review.value
                review.value = ""
                h4.innerText = Name.value
                Name.value = ""
                p2.innerText = `${now.toLocaleDateString()}  ${now.toLocaleTimeString()}`


                ReviewInfo.appendChild(h1)
                ReviewInfo.appendChild(imogie)
                ReviewInfo.appendChild(p1)
                ReviewInfo.appendChild(h4)
                ReviewInfo.appendChild(p2)
                return ReviewInfo
}

function updateReview() {
        let now = new Date()
        let TITLE = title.value
        let REVIEW = review.value
        let NAME = Name.value
        let EMOGY = str

        if (TITLE.trim() === "" || EMOGY.trim() === "" || REVIEW.trim() === "" || NAME.trim() === "") {
                alert("All values should be filled");
        }
        else {
                const ReviewInfo = createrReviewElement(now,TITLE,REVIEW,NAME,EMOGY)
                console.log(ReviewInfo)
                reviewSection.prepend(ReviewInfo)

        }

        savetoLocalStorage({})
} 

function savetoLocalStorage(now,title,name,review,emogy){
        localStorage.setItem("now", now.toLocaleDateString())
}

function loadFromLocalStorage(){
        // console.log(localStorage.getItem("now"))
        let result = (localStorage.getItem("now"))
        console.log((typeof result))

        createrReviewElement(result)

}
