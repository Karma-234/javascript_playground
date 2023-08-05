// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => {
//         console.log(response.url);
//        return response.json();
        
//       })
//       .then(json => {
//         if (json['completed'].toString().toLowerCase().includes('false')) {
//             console.log('NOT COMPLETED!!!!!!!');   
//         }
//         console.log(json);
//         console.log('DONE!!!!!!!');      
//     });

    
    const req = ()=>{
     const  request =new XMLHttpRequest();
    request.addEventListener('readystatechange',()=>{
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.responseText);
        } else if (request.readyState === 4 ){
        alert('Unable to fetch data.');
        }
    });
    request.open('GET','https://jsonplaceholder.typicode.com/todos/');
    request.send();
    }
       