document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.input');
  const taskList = document.querySelector('.task-list');

  const createItem = (value) => {
    const taskItem = document.createElement('DIV');
    const taskName = document.createElement('DIV');
    const taskNameCapsule = document.createElement('SPAN')
    const deleteTaskButton = document.createElement('BUTTON');
    const buttonIcon = document.createElement('I');
    const buttonIconSpan1 = document.createElement('SPAN');
    const buttonIconSpan2 = document.createElement('SPAN');

    taskItem.setAttribute('class', 'task-item js-task');
    taskName.setAttribute('class', 'task-item__name');
    taskNameCapsule.innerText = value;
    deleteTaskButton.setAttribute('class', 'task-item__button js-remove-task');
    buttonIcon.setAttribute('class', 'task-item__button-icon');

    taskName.addEventListener('click', () => {
      taskName.classList.toggle('complete');
    });

    deleteTaskButton.addEventListener('click', () => {
      deleteTaskButton.closest('.js-task').remove();
    });

    buttonIcon.appendChild(buttonIconSpan1);
    buttonIcon.appendChild(buttonIconSpan2);
    deleteTaskButton.appendChild(buttonIcon);
    taskName.append(taskNameCapsule, deleteTaskButton);
    taskItem.appendChild(taskName);

    if (!taskList) return;
    taskList.appendChild(taskItem);
  }

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(form);
    let formDataContent = Object.fromEntries(formData);
    createItem(formDataContent.task);
    form.reset();
  });
});