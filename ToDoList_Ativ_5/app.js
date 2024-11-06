class Task {
    constructor(year, month, day, type, description){
        this.year        = year
        this.month       = month
        this.day         = day
        this.type        = type
        this.description = description
    }

    validateData() {
        for (let key in this){
            if(this[key] === undefined || this[key] === ""){
                console.error(`O campo ${key} é obrigatório.`)

                return false
            }
        }
        return true
    }
}

class Database {

    constructor(){
        this.initDatabase()
    }

    initDatabase() {
        const id = localStorage.getItem('id')

        if(id === null){
            localStorage.setItem('id', '0')
        }
    }

    loadTasks() {
        let tasks = []
        let id = localStorage.getItem('id')

        for(let i = 1; i <= id; i++){
            try {
                let task = JSON.parse(localStorage.getItem(i))
                task.id = i
                tasks.push(task)
            } catch (error){
                console.error(`Erro ao carregar a tarefa com id ${id}`)
            }
        }
        return tasks
    }

    createTask(task) {
        let id = this.getNextId()
        task.id = id
        localStorage.setItem(id, JSON.stringify(task))
        localStorage.setItem('id', id.toString())
    }
    
    removeTask(id){
        localStorage.removeItem(id)
    }

    OpenEditTask(task){
        openEditModal(task)
    }

    searchTasks(task){
        let id = localStorage.getItem('id')

        for(let i = 1; i <= id; i++){
            if(id[i] === task.id){
                return task
            }
        }
    }

    getNextId(){
        let currentId = localStorage.getItem('id')
        return parseInt(currentId) + 1
    }
}

const database = new Database()

function registerTask(){
    let year = document.getElementById('year').value
    let month = document.getElementById('month').value
    let day = document.getElementById('day').value
    let type = document.getElementById('type').value
    let description = document.getElementById('description').value

    let task = new Task(year, month, day, type, description)

    if(task.validateData()){
        database.createTask(task)
    } else {
        alert('Preencha todos os campos.')
    }
}

function loadTasks(tasks = database.loadTasks()){
    let listTask = document.getElementById('listTasks')
    listTask.innerHTML = ''

    tasks.forEach((task) => {
        let row = listTask.insertRow()

        row.insertCell(0).innerHTML = `${task.day}/${task.month}/${task.year}`
        row.insertCell(1).innerHTML = getTaskTypeName(task.type)
        row.insertCell(2).innerHTML = task.description

        let edit_btn = document.createElement('button')
        edit_btn.className = 'btn btn-primary'
        edit_btn.id = task.id
        edit_btn.innerHTML = 'Edit'
        edit_btn.addEventListener('click', () => {
            database.OpenEditTask(task)
            loadTasks()
        })
        row.insertCell(3).append(edit_btn)

        let remove_btn = document.createElement('button')
        remove_btn.className = 'btn btn-danger'
        remove_btn.id = task.id
        remove_btn.innerHTML = 'Delete'
        remove_btn.addEventListener('click', () => {
            database.removeTask(task.id)
            loadTasks()
        })

        row.insertCell(4).append(remove_btn)
    })
}

function getTaskTypeName(type){
    switch(type) {
        case '1':
            return 'Studies'
            break
        case '2':
            return 'Work'
            break
        case '3':
            return 'Home'
            break
        case '4': 
            return 'health'
            break
        case '5':
            return 'Family'
            break
        default: 
            return 'Desconhecido'
    }
}

function openEditModal(task) {
    document.getElementById('editTaskModal').setAttribute('data-task-id', task.id)

    document.getElementById('editYear').value = task.year
    document.getElementById('editMonth').value = task.month
    document.getElementById('editDay').value = task.day
    document.getElementById('editType').value = task.type
    document.getElementById('editDescription').value = task.description

    $('#editTaskModal').modal('show')
}

function closeEditModal() {
    $('#editTaskModal').modal('hide')
}

function saveTaskChanges() {
    const taskId = document.getElementById('editTaskModal').getAttribute('data-task-id')

    let year = document.getElementById('editYear').value
    let month = document.getElementById('editMonth').value
    let day = document.getElementById('editDay').value
    let type = document.getElementById('editType').value
    let description = document.getElementById('editDescription').value

    let editedTask = new Task(year, month, day, type, description)

    let currentTask = JSON.parse(localStorage.getItem(taskId))

    currentTask.year = editedTask.year
    currentTask.month = editedTask.month
    currentTask.day = editedTask.day
    currentTask.type = editedTask.type
    currentTask.description = editedTask.description

    localStorage.setItem(taskId, JSON.stringify(currentTask))

    closeEditModal()
    loadTasks()
}

document.addEventListener('DOMContentLoaded', () => {
    if(document.body.contains(document.getElementById('listTasks'))){
        loadTasks()
    }
})