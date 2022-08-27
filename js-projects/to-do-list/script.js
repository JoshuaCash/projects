
// Register the service worker
if ('serviceWorker' in navigator) {
  // Wait for the 'load' event to not block other work
  window.addEventListener('load', async () => {
    // Try to register the service worker.
    try {
      const reg = await navigator.serviceWorker.register('/sw.js');
      console.log('Service worker registered! 😎', reg);
    } catch (err) {
      console.log('😥 Service worker registration failed: ', err);
    }
  });
}

window.addEventListener('load', () => {
const todoSubmit = document.querySelector('.submit');
const todoInput = document.querySelector('.todo');
const taskList = document.querySelector('.task-list');

todoSubmit.addEventListener('click', e => {
    e.preventDefault();


    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');

    taskList.appendChild(taskContainer);

    const tasks = document.createElement('div');
    tasks.classList.add('tasks');

    taskContainer.appendChild(tasks);

    const taskDiv = document.createElement('div');
    const taskDiv2 = document.createElement('div');

    tasks.appendChild(taskDiv);
    tasks.appendChild(taskDiv2);

    const taskInput = document.createElement('input');
    taskInput.classList.add('task-input');
    taskInput.value = todoInput.value;
    taskInput.setAttribute("readonly", "readonly");
    taskDiv.appendChild(taskInput);
    
    editButton = document.createElement('button');
    editButton.classList.add('edit');
    editButton.innerHTML = 'Edit';

    deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.textContent = 'Delete';

    taskDiv2.appendChild(editButton);
    taskDiv2.appendChild(deleteButton);

    todoInput.value = '';

    editButton.addEventListener('click', e => {
        e.preventDefault();
        
        taskInput.removeAttribute("readonly");
    
        editButton.style.backgroundColor = '#2b726e';
        
    
        editButton.addEventListener('click', e => {
            taskInput.setAttribute("readonly", "readonly");
    
            editButton.style.backgroundColor = '#368F8B';
        })
    })
    
    deleteButton.addEventListener('click', e => {
        e.preventDefault();
        
        taskContainer.remove("tasks");
        
    })
})



})