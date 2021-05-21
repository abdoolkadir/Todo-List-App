// Get Ui Components
const task = document.querySelector('#add-tasks')
const addTasksBtn = document.querySelector('.add-tasks-btn')
const taskList = document.querySelector('.tasks-list');

// Load Event Listeners
loadEventListeners();

// Load all Event Listeners
function loadEventListeners() {
    // Add task
    addTasksBtn.addEventListener('click', addTasks);
    // Delete Task
    taskList.addEventListener('click', deleteTask);
    // Edit Task
    taskList.addEventListener('click', editTask)
}

// Add Task
function addTasks(e) {
    if(task.value === ''){
        alert('Please enter a task!');
    } else {
        
        // Create UI elements
        let li = document.createElement('li');

        // Add class to Tasks card created
        li.classList = 'task-card';

        // Add Task text inner HTML to Li
        li.innerHTML = `
            <i class="fas fa-check-square"></i>
            <p class="task">${task.value}</p>
            <span class="align-right">
                <a href="#" class="edit-btn"><i class="fas fa-edit"></i></a>
                <a href="#" class="delete-btn"><i class="fas fa-trash"></i></a>
            </span>
        `;
        // Add task card to Task lists
        taskList.appendChild(li);

        // Clear Input field
        task.value = '';
    }
};

// delete Task
function deleteTask(e) {
    if(e.target.parentElement.classList.contains('delete-btn')){
        e.target.parentElement.parentElement.parentElement.remove()

        // console.log(e.target.parentElement)
    }
};

// Edit/Update Task
function editTask(e) {
    if(e.target.parentElement.classList.contains('edit-btn')){
        
    }
}