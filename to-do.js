document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const addTaskButton = document.getElementById('add-task');
    const newTaskInput = document.getElementById('new-task');
  
    addTaskButton.addEventListener('click', () => {
      addTask(newTaskInput.value);
      newTaskInput.value = '';
    });
  
    function addTask(taskText) {
      if (taskText.trim() === '') return;
  
      const listItem = document.createElement('li');
  
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
      listItem.appendChild(taskSpan);
  
      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.classList.add('edit-btn');
      editButton.addEventListener('click', () => editTask(listItem, taskSpan));
      listItem.appendChild(editButton);
  
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete-btn');
      deleteButton.addEventListener('click', () => deleteTask(listItem));
      listItem.appendChild(deleteButton);
  
      const saveButton = document.createElement('button');
      saveButton.textContent = 'Save';
      saveButton.classList.add('save-btn');
      saveButton.addEventListener('click', () => saveTask(listItem, taskSpan));
      listItem.appendChild(saveButton);
  
      taskList.appendChild(listItem);
    }
  
    function editTask(listItem, taskSpan) {
      listItem.classList.add('editing');
  
      const input = document.createElement('input');
      input.type = 'text';
      input.value = taskSpan.textContent;
      listItem.insertBefore(input, taskSpan);
      listItem.removeChild(taskSpan);
    }
  
    function saveTask(listItem, taskSpan) {
      listItem.classList.remove('editing');
  
      const input = listItem.querySelector('input');
      taskSpan.textContent = input.value;
      listItem.insertBefore(taskSpan, input);
      listItem.removeChild(input);
    }
  
    function deleteTask(listItem) {
      taskList.removeChild(listItem);
    }
  });
  