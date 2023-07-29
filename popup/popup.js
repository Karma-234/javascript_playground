const popupButton = document.querySelector('button');
const popupWrapper = document.querySelector('.popup-wrapper');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup-close');
popupButton.addEventListener('click', e => {
    
    popupWrapper.style.display = 'block';
});
closePopupButton.addEventListener('click', e => {
    popup.style.display = 'none';
    e.stopPropagation();
    // popupWrapper.style.display = 'none';
});
popupWrapper.addEventListener('click', e => {
    if(popup.style.display != 'none'){
        popup.style.display = 'none';
        // e.stopPropagation();
    }
    else{
        popup.style.display = 'block';
    }
    
});
// document.addEventListener('click',e=>{
//     if(popupWrapper.style.display != 'none'){
//         // popup.style.display = 'none';
//         popupWrapper.style.display = 'none';
//         e.stopPropagation();
        
//     }else{
//         // e.stopPropagation();
//     }
    
    
// });