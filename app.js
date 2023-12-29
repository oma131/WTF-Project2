
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    var startTimeInput = document.getElementById('startTime');
    var endTimeInput = document.getElementById('endTime');
    var startTime = startTimeInput.value;
    var endTime = endTimeInput.value;
   

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

        var editButton = document.createElement('button');
        editButton.innerHTML = getEditIconSVG();
        editButton.onclick = function() {
            // Call a function to handle the editing of the task
            openEditModal(li);
        };

        var removeButton = document.createElement('button');
        removeButton.innerHTML = getRemoveIconSVG();
        removeButton.onclick = function() {
            taskList.removeChild(li);
            checkAllTasksCompleted();
        };

        li.appendChild(checkbox);
        li.appendChild(taskText);
        li.appendChild(editButton);
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the input fields after adding a task
        taskInput.value = '';
        startTimeInput.value = '';
        endTimeInput.value = '';
    }
}

function handleEnterKey(event, nextElementId) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default behavior of the Enter key

        if (nextElementId === 'addTask') {
            addTask(); // If the next element is 'addTask', call the addTask function
        } else {
            document.getElementById(nextElementId).focus(); // Focus on the next input field
        }
    }
}


function getEditIconSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/></svg>';
}

function getRemoveIconSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/></svg>';
}


function openEditModal(taskElement) {
    let modal = document.getElementById('editModal');
    let taskText = taskElement.querySelector('span');

    document.getElementById('editTaskText').value = taskText.textContent;

    modal.taskElement = taskElement;

    modal.style.display = 'block';
}

function closeEditModal() {
    let modal = document.getElementById('editModal');
    modal.style.display = 'none';
}

function saveEditedTask() {
    let modal = document.getElementById('editModal');
    let taskText = document.getElementById('editTaskText').value;

    modal.taskElement.querySelector('span').textContent = taskText;

    closeEditModal();
}

// ... (existing JavaScript code)

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
        openCongratsModal();
    }
}

function openCongratsModal() {
    var congratsModal = document.getElementById('congratsModal');
    congratsModal.style.display = 'block';
}

function closeCongratsModal() {
    var congratsModal = document.getElementById('congratsModal');
    congratsModal.style.display = 'none';
}

function clearTaskList() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Clears all child elements
}


function clearTaskListAndClose() {
    closeCongratsModal();
    clearTaskList();
}


