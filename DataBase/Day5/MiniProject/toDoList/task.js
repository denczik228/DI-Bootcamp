// for getting data from local storage
let task = localStorage.getItem('MyTasks')

function retrieveTask(){

    if (task=== null) {
        return []
    }
    else {
        return (task = JSON.parse(localStorage.getItem('MyTasks')))

    }


}

retrieveTask()

let append = document.querySelector('#displayTasks')
append.textContent = JSON.stringify(task);
let taskName = document.querySelector('#name')
let t = task.name
// taskName.appendChild(t)
