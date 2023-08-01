const addForm = document.querySelector('.add-form');
const searchForm = document.querySelector('.search-form input');
const todoList = document.querySelector('.todo-list');
const todos = document.querySelectorAll('.todo');

let searchString;

searchForm.addEventListener('keyup', e=>{
    // e.preventDefault();
    // e.reset();
    searchString = e.target.value.trim();
    filterGenerator(searchString);
    if (searchString.length < 1) {
        restoreGenerator(searchString);
    }
    // console.log(e);
});
let todoString;
todoList.addEventListener('click', el=>{
   if ( el.target.classList.contains('todo')) {
    el.pointerType = 'pointer';
    el.target.remove();
   }
    
});

const filterGenerator = todo =>{
    Array.from(todoList.children)
    .filter(e=> !e.textContent.includes(todo))
    .forEach(e=>{
        e.classList.add('filtered');
    });
    
};
const restoreGenerator = todo =>{
    Array.from(todoList.children)
    .filter(e=> e.textContent.includes(todo))
    .forEach(e=>{
        e.classList.remove('filtered');
    });
    
};

const tempGenerator = todo =>{
    const newTodo = document.createElement('li');
    newTodo.setAttribute('class', 'todo');
    // newTodo.setAttribute('class','todo');
    newTodo.innerText = todo;
    todoList.append(newTodo);
    // searchITems.push(todo);
    // console.log(searchITems)
    
};
addForm.addtodo.addEventListener('keyup', e=>{
    // e.preventDefault();
    todoString = e.target.value.trim();
    console.log(todoString);
    
    // console.log(e.target.value);
    
});
addForm.addEventListener('submit', e=>{
    e.preventDefault();
    
    tempGenerator(todoString);
    addForm.reset();
    // console.log(e);
    // alert('Submitted');
});
// todoList.append();
// const todos = Array.from(todoList.children);
