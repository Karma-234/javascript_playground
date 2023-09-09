const roomList = document.querySelector(".room-options");
const rooms = document.querySelectorAll(".room");
const messageField = document.querySelector("[name='message']");
const updateField = document.querySelector("[name='update']");
const sendButton = document.querySelector("[name='send']");
const updateButton = document.querySelector("[name='update']");
const chats = document.querySelectorAll(".chat");
const selectTab = id=>{
    rooms.forEach(room=>{
        room.getAttribute('id') !== id ?room.classList.remove('selected') :null ;
    });
    chats.forEach(chat=>{
        chat.getAttribute('id') !== id ?chat.classList.add('hide') :chat.classList.remove('hide')  ;
    });
}
roomList.addEventListener('mouseout',e=>{
    
    if (e.target.tagName==='P' && (e.target.classList.contains('hover')||e.target.classList.contains('selected'))) {
        e.target.classList.remove('hover');
    }
});
roomList.addEventListener('mousemove',e=>{
    
    if (e.target.tagName==='P' && !e.target.classList.contains('hover') && !e.target.classList.contains('selected')) {
        e.target.classList.add('hover');
    }
});
roomList.addEventListener('click',e=>{
    if (e.target.tagName==='P' && !e.target.classList.contains('selected')) {
        const id = e.target.getAttribute('id');
        e.target.classList.remove('hover');
        e.target.classList.add('selected');
        
        selectTab(id);
        
    }
});
