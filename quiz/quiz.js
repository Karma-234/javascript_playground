const correctAnswers = ['B','B', 'B'];
const form = document.querySelector('.quiz-form');
const resultClass = document.querySelector('.result');
form.addEventListener('submit',e =>{
    e.preventDefault();
    let score = 0;
    const userChoices = [form.q1.value, form.q2.value, form.q3.value];
    userChoices.forEach((userChoice, index) =>{
        if (userChoice == correctAnswers[index]) {
            score += 10;
        }
    });
    scrollTo(0,0);
    // resultClass.querySelector('span').textContent = `${score}`;
    resultClass.classList.remove('d-none');
    ayyaryMethods();
    doThisAnimation(score);
    // if (score >= 20) {
    //     alert('Good Job')
    // }
   
    // resultClass.style.display = 'block';
    
});
function doThisAnimation(score) {
    let i = 0;
   const timer =  setInterval(()=>{
    resultClass.querySelector('span').textContent = `${i}`;
    
    if (i===score) {
        clearInterval(timer);
    }else{
        i++;
    }
    }, 50);
}

function ayyaryMethods() {
    const testArray = [10,30,60,20,40];
    const newArray = testArray.filter(e=>{
      return  e <= 30;
    });
    console.log(newArray);
    console.log(testArray);

    testArray.sort();
    console.log(testArray);
}