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
}

// Add Task
function addTasks(e) {
    if(task.value === ''){
        alert('Please enter a task!');
    } else {
        
        // Create Task Cards
        let li = document.createElement('li')

        // Add class to Tasks card created
        li.classList = 'task-card';

        // Add Task text to Li
        li.innerHTML = `
            <i class="fas fa-dot-circle"></i>
            <p class="task">${task.value}</p>
        `
        // Add task card to Task lists
        taskList.appendChild(li);

        // Clear Input field
        task.value = '';
    }
}