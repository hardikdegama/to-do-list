document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;

    // Check if dark mode is enabled in localStorage
    const darkMode = localStorage.getItem('darkMode') === 'true';

    if (darkMode) {
        body.classList.add('dark-mode');
        toggleButton.classList.remove('light-mode');
        toggleButton.classList.add('dark-mode');
        
    }

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Update button and localStorage
        if (body.classList.contains('dark-mode')) {
            toggleButton.classList.remove('light-mode');
            toggleButton.classList.add('dark-mode');
            
            localStorage.setItem('darkMode', 'true');
        } else {
            toggleButton.classList.remove('dark-mode');
            toggleButton.classList.add('light-mode');
            
            localStorage.setItem('darkMode', 'false');
        }
    });
});

// this code is a ok btn
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Load tasks from localStorage
    loadTasks();

    addButton.addEventListener('click', () => {
        const taskValue = taskInput.value.trim();
        
        if (taskValue === '') {
            alert('Please enter a task!');
            return;
        } else {
            alert('Your Data Added Successfully.');
        }

        addTask(taskValue);
        taskInput.value = '';
    });

    function addTask(taskValue) {
        const tasks = getTasks();
        tasks.push(taskValue);
        saveTasks(tasks);
        renderTasks();
    }

    function getTasks() {
        const tasks = localStorage.getItem('tasks');
        return tasks ? JSON.parse(tasks) : [];
    }

    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function renderTasks() {
        const tasks = getTasks();
        taskList.innerHTML = '';

        tasks.forEach((task, index) => {
            const taskItem = document.createElement('h3');
            taskItem.innerHTML = `
                ${task}
                <button class="edit-button">Edit</button>
                <button class="delete-button">Delete</button>
            `;

            taskList.appendChild(taskItem);

            // Edit button event
            taskItem.querySelector('.edit-button').addEventListener('click', () => {
                const newValue = prompt('Edit your task:', task);
                if (newValue) {
                    tasks[index] = newValue.trim();
                    saveTasks(tasks);
                    renderTasks();
                }
            });

            // Delete button event
            taskItem.querySelector('.delete-button').addEventListener('click', () => {
                if (confirm('Are you sure you want to delete this task?')) {
                    tasks.splice(index, 1);
                    saveTasks(tasks);
                    renderTasks();
                }
            });
        });
    }

    function loadTasks() {
        renderTasks();
    }
});
