const form = document.querySelector('.signup-form');
const userName = form.querySelector('#username');
const passsword = form.querySelector('#password');
const submit = form.querySelector('#submit');

form.addEventListener('submit', e=>{
    e.preventDefault();
    console.log(userName.value);
    console.log(passsword.value);
    const user = form.username.value
    const isContainingUsername = RegExp(`.com$`).test(passsword.value);
   if (isContainingUsername) {
    alert('Your password must not contain your email!')
   } else {
    alert('All good to go!');
   }
    
});
form.username.addEventListener('keyup', e=>{
    console.log(e.target.value);
});
