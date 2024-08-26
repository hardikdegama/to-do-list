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

    addButton.addEventListener('click', () => {
        const taskValue = taskInput.value.trim();
        
        if (taskValue === '') {
            alert('Please enter a task!');
            return;
        }else{
            alert('Your Data Add a Successfuly.')
        }
        const taskItem = document.createElement('h3');
        taskItem.innerHTML = `
            ${taskValue}
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
        `;
        
        taskList.appendChild(taskItem);
        taskInput.value = '';

        // Add event listeners for edit and delete buttons
        taskItem.querySelector('.edit-button').addEventListener('click', () => {
            const newValue = prompt('Edit your task:', taskItem.firstChild.textContent.trim());
            if (newValue) {
                taskItem.firstChild.textContent = newValue;
            }
        });

        taskItem.querySelector('.delete-button').addEventListener('click', () => {
            if (confirm('Are you sure you want to delete this task?')) {
                taskList.removeChild(taskItem);
            }
        });
    });
});
