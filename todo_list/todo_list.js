const addForm = document.querySelector('.add-form');
const todoList = document.querySelector('.todo-list');
let todoString;
addForm.addtodo.addEventListener('keyup', e=>{
    e.preventDefault();
    todoString = e.target.value;
    console.log(todoString);
    // console.log(e.target.value);
    
});
addForm.addEventListener('submit', e=>{
    e.preventDefault();
    const newTodo = document.createElement('p').innerText = todoString;
    todoList.append(newTodo);
    addForm.addtodo.value = '';
    // console.log(e);
    // alert('Submitted');
});
// todoList.append();
const todos = Array.from(todoList.children);
todos;