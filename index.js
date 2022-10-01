const form = document.querySelector('#form');
const input = document.querySelector('#input');
const todos = document.querySelector('#todos');
const toDoElems = document.querySelectorAll('.todo-elem');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const todoText = input.value;

  if(todoText){
    createToDoElem(todoText);

    cleanInput();

  } else {
    return
  }

})

function createToDoElem(innerText) {
  const todoElement = document.createElement('li');
  todoElement.classList.add('todo-elem');
  todoElement.innerText = innerText;
  completedElem(todoElement);
  todos.appendChild(todoElement);
}

function completedElem (elem) {
  elem.addEventListener('click', () => {
    elem.classList.toggle('completed');
  })
}

function cleanInput() {
  input.value = '';
}