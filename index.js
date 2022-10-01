const form = document.querySelector('#form');
const input = document.querySelector('#input');
const todos = document.querySelector('#todos');
const toDoElems = document.querySelectorAll('.todo-elem');
const cleanBtn = document.querySelector('#clean-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const todoText = input.value;

  if(todoText){
    createToDoElem(todoText);

    cleanInput();

  }

})

cleanBtn.addEventListener('click', cleanTodos);

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

function cleanTodos() {
  const arrOfList = Array.from(todos.children);
  console.log(arrOfList);
  todos.innerHTML = '';

  // arrOfList.forEach(elem => {
  //  elem.remove();
  // });
}