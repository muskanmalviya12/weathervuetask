document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const completedTaskList = document.getElementById('completed-task-list');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskText = taskInput.value;
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', function() {
            taskItem.removeChild(completeButton);
            completedTaskList.appendChild(taskItem);
        });

        taskItem.appendChild(completeButton);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    });
});

