const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let todos = [];

function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
}

function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  todos = todos.filter(todo => todo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo){
  const li = document.createElement('li');
  li.id = newTodo.id
  const span = document.createElement('span');
  span.innerText = newTodo.text;
  const button = document.createElement('button');
  button.innerText = '✘';
  button.addEventListener('click', deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  todos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello(item){
  console.log("this is the turn of", item);
}

const SavedToDos = localStorage.getItem(TODOS_KEY);
if(SavedToDos) {
  const parsedToDos = JSON.parse(SavedToDos);
  todos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}