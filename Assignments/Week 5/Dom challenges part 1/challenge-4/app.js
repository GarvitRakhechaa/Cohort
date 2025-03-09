let addButton = document.getElementById('addButton')
let taskInput = document.getElementById('taskInput')
let taskList = document.getElementById('taskList')
let totalTasks = document.getElementById('totalTasks')
let emptyMessage = document.querySelector(".empty-list")

let totalcount = 0
let completeCount = 0



addButton.addEventListener('click', addItems)

function addItems() {
    if (!taskInput.value.trim()) {
        console.log("value bharo")
        return
    }
    // if (taskList.children.length === 0) {    //talklist ke children ki length zero hai to 
    //     let emptyli = document.createElement('li')
    //     emptyli.classList = "empty-list"
    //     emptyli.innerText = "No tasks yet. Add one above!"
    //     taskList.appendChild(emptyli)
    // }
    // else {
        if (emptyMessage) {
            emptyMessage.remove()
            // emptyMessage =null
        }
        let li = document.createElement('li')
        li.classList.add('task-item')

        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.classList = "complete-checkbox"

        let taskText = document.createElement("span");
        taskText.innerText = taskInput.value;
        taskText.classList.add("task-text");

        let deletebtn = document.createElement("button")
        deletebtn.classList.add('delete-button')
        deletebtn.innerText = "delete"

        li.append(checkbox, taskText, deletebtn)
        taskList.appendChild(li)

        taskInput.value = ''
        totalcount++

        deletebtn.addEventListener('click', deleteItem)

        checkbox.addEventListener("change", function () {
            li.classList.toggle("completed", checkbox.checked);
            // console.log(li)
            // console.log(checkbox.classList)

            if (checkbox.checked) {
                completeCount++
            } else {
                completeCount--
            }
            updateCompletedCount()
        });
        updateTaskCount();
        // totalTasks.innerText = `Total tasks: ${totalcount}`
}



function deleteItem() {
    let parent = this.parentElement

    parent.remove()
    totalcount--
    totalTasks.innerText = `Total tasks: ${totalcount}`

    if (taskList.children.length === 0) {    //talklist ke children ki length zero hai to 
        showEmptyMessage();
    }
    updateTaskCount()
}

function showEmptyMessage(){
    let emptyli = document.createElement('li')
        emptyli.classList = "empty-list"
        emptyli.innerText = "No tasks yet. Add one above!"
        taskList.appendChild(emptyli)
}

function updateTaskCount(){
        totalTasks.innerText = `Total tasks: ${totalcount}`

}
function updateCompletedCount() {
    completedTasks.innerText = `Completed: ${completeCount}`
}