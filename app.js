function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    var startTime = document.getElementById('startTime').value;
    var endTime = document.getElementById('endTime').value;

    if (taskInput.value !== '') {
        var li = document.createElement('li');

        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.onclick = function() {
            li.classList.toggle('completed');
            checkAllTasksCompleted();
        };

        var taskText = document.createElement('span');
        taskText.textContent = taskInput.value + ` (${startTime} - ${endTime})`;

        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = function() {
            taskList.removeChild(li);
            checkAllTasksCompleted();
        };

        li.appendChild(checkbox);
        li.appendChild(emoji);
        li.appendChild(taskText);
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the input fields after adding a task
        taskInput.value = '';
        document.getElementById('startTime').value = '';
        document.getElementById('endTime').value = '';
    }
}

function checkAllTasksCompleted() {
    var taskList = document.getElementById('taskList');
    var tasks = taskList.getElementsByTagName('li');
    var allCompleted = true;

    for (var i = 0; i < tasks.length; i++) {
        if (!tasks[i].classList.contains('completed')) {
            allCompleted = false;
            break;
        }
    }

    if (allCompleted && tasks.length > 0) {
        alert('Congratulations, you finished all your tasks!');
        clearTaskList();
    }
}

function clearTaskList() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clears all child elements
}
