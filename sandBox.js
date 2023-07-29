let email = 'Running Command'

const article  = document.querySelector('article');
console.log(article.children);
// console.log();
Array.from(article.children).forEach(e=>{
    e.classList.add('article-element');
})
const ul = document.querySelector('li');
const title  = document.querySelector('button');
// console.log(title.parentElement);
const cgikd =  {firstName:'', lastName:'',setfullName: function setName(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}}
const button  = document.querySelector('button');
button.addEventListener('click', e =>{
    console.log(e);
    if (ul.parentElement.tagName.toLowerCase().includes('article')) {
       const newLi  = document.createElement('li');
       newLi.textContent='New todo added';
        // ul.innerHTML += "<li> New To do list added</li>";
        ul.append(newLi);
    }
    Array.from(article.children).forEach(e=>{
        e.classList.add('article-element');
    })
});
const allArticles = Array.from(document.querySelectorAll('li'));
const betsAllArtices = document.querySelectorAll('li');
betsAllArtices.forEach(e=>{
    e.addEventListener('click', event =>{
    
        // allArticles.remove(e.classList)
        // allArticles.
        // allArticles.indexOf(e);
        // allArticles.remove(e.target);
        event.target.remove();
        
        // console.log(event.target.remove);
        if (event.isTrusted) {
            
        }
        // const ul = document.querySelector(e.tagName)
        // console.log(e.tagName)
        // event.
        // event.target.style.textDecoration = 'line-through';
    })
})
const styleBox = document.querySelector('.box');
styleBox.addEventListener('mousemove',e=>{
    console.log(e)
    console.log(e.offsetX,e.offsetY)
});

















// console.log(email.lastIndexOf('n'))
// let result = email.slice(0, 3)
// let result2 = email.substring(8,10)
// console.log(result2)
// let radius = 0;
// const p1 = 3.14;
// console.log(radius,p1)
// function greet() {
//     console.log('Hello');
// }
// greet();
// const getNumber = radius =>  3.14*radius**2;

// console.log(getNumber(50))
// const ul = document.querySelector('.people');
// let html = '';
// const people = ['mario','luigi','fred','Marcus']

// const doThis = item => {
//  html+=`<li>${item}</li>`;
// }
// people.forEach(doThis);
// console.log(html)
// ul.innerHTML = html;
// const ul = document.querySelectorAll('p');
// ul.forEach(e => {
//     if (e.innerText.toLowerCase().includes('error')) {
//         e.classList.add('error');
//     }
//     if (e.innerText.toLowerCase().includes('success')) {
//         e.classList.add('success');
        
//     }

// });
// const focusClass = ul[ul.length - 1]
// focusClass.add('success')

// ul.setAttribute('href','https://www.stackoverflow.com');