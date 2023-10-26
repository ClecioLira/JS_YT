const addTask = document.getElementById('add-task')
const taskContainer = document.getElementById('task-container')
const inputTask = document.getElementById('input-task')

addTask.addEventListener('click', function() {
    let task = document.createElement('div')
    task.classList.add('task')

    let li = document.createElement('li')
    li.innerText = `${inputTask.value}`
    li.classList.add('li')
    task.appendChild(li)

    let checkButton = document.createElement('button')
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkButton.classList.add('checkTask')
    task.appendChild(checkButton)

    let deleteButton = document.createElement('button')
    deleteButton.classList.add('deleteTask', 'fa-solid', 'fa-trash-can')
    task.appendChild(deleteButton)

    if (inputTask.value === '') {
        alert('Por favor, digite sua tarefa.')
    } else {
        taskContainer.appendChild(task)
    }

    inputTask.value = ''

    checkButton.addEventListener('click', function() {
        li.style.textDecoration = 'line-through'
    })

    deleteButton.addEventListener('click', function(e) {
        if (e.target.classList.contains('deleteTask')) {
            task.remove()
        }
    })
})