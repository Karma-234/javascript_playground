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
    newTodo.setAttribute('class', 'todo py-2 my-2 bg-primary');
    newTodo.innerText = todo;
    todoList.append(newTodo);
  
    
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
const getTodosAsync = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    if (response.status !== 200) {
        throw new Error('Unable to fetch data!')
    }
    const data = await response.json();
    
    return data;
}
getTodosAsync().then(e=>{
    let counter = 0;
    e.forEach(v=>{
        
            // tempGenerator(v['title']);
           
            
            if (counter < 50) {
                const timer = setInterval(() => {
                    tempGenerator(v['title']);
                    if (counter > 48) {
                        clearInterval(timer);
                    }else{
                        counter++;
                    }
                }, 100);
                
                
                
            } 
          
            // counter++;
    });
}).catch(e=>{
    alert(e);
});