const getTodosAsync = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todo/');
    if (response.status !== 200) {
        throw new Error('Unable to fetch data!')
    }
    const data = await response.json();
    
    return data;
}

// fetch('https://jsonplaceholder.typicode.com/todos/')
//       .then(response => {
//         console.log(response.url);
//        return response.json();
        
//       })
//       .then(json => {
//        myCallback(json);
//         console.log(json);
//         console.log('DONE!!!!!!!');      
//     }).catch(err => {});
// fetch

    const todoList = document.querySelector('.todolist');
    const getTodos = () =>{
        return new Promise((resolve, reject) =>{
            const  request = new XMLHttpRequest();
            request.addEventListener('readystatechange',()=>{
                if (request.readyState === 4 && request.status === 200) {
                    const myData = JSON.parse(request.responseText);
                    resolve(myData);
                } else if (request.readyState === 4 ){
                    reject('error getting content!');
                }
            });
            request.open('GET','https://jsonplaceholder.typicode.com/todos/');
            request.send();
        });
  
  
    }
    const addTodos = (userId, completed, todo)=>{
       let  isComleted  = completed ? 'Completed':'Pending' ;
        const newTodo = document.createElement('li');
        newTodo.innerHTML = `
        <h2 class="title"> ${todo}
        <span class="userId">${userId}</span>
        </h2>
        <div class="check">${isComleted}</div>
        `;
        const targetTodo =   newTodo.classList.add('todo');
      todoList.prepend(targetTodo);
    }
    
    const myCallback = ( data)=>{
        let counter = 0;
        console.log(data);
      
        // data.forEach(e => {
        //     if (counter < 10) {
        //         addTodos(e['userId'], e['completed'], e['title']);
        //     }
        //     counter++;

        // });
        
        
    }

    // getTodos().then(todos=> {
    //     // console.log(todos);
    //     myCallback(todos);
    // }).catch(err => {
        
    //     if (err) {
    //         console.log('Promise rejected', err);
    //     }
    // });

   getTodosAsync().then(todos=> {
    console.log(todos);
   }).catch(err => {
    console.log(err);
   });