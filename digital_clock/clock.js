let clock = document.querySelector('.clock');
const  tick = () => {
const  newDate = new Date();
const getHour = newDate.getHours();
const getMinute = newDate.getMinutes();
const getSeconds = newDate.getSeconds();
const newHtml = `<span class="hours time">${getHour}</span>
                <span class="minutes time">${getMinute}</span>
                <span class="seconds time">${getSeconds}</span>`;
                doThisAnimation('seconds', getSeconds);
                
clock.innerHTML = newHtml;
console.log(clock.innerHTML);
}

setInterval(tick,1000);

function doThisAnimation(className, score) {
    let i = 0;
   const timer =  setInterval(()=>{
    document.querySelector(`.${className}`).textContent = `${i}`;
    
    if (i===score) {
        clearInterval(timer);
    }else{
        i++;
    }
    }, 5);
}

