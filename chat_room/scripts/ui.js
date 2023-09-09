const roomList = document.querySelector(".room-options");
const rooms = document.querySelectorAll(".room");
const messageField = document.querySelector("[name='send-field']");
const updateField = document.querySelector("[name='update-field']");
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
sendButton.addEventListener('click',e=>{
    const text = messageField.value;
    console.log(text);
    if (text!=='') {
        messageField.value='';
    }
    
});
updateButton.addEventListener('click',e=>{
    const text = updateField.value;
    console.log(text);
    if (text!=='') {
        updateField.value='';
    }
    
});
const getChats = (chatCard,id)=>{
    const newItem = `<div class="chat-card" data-id=${id}>
                        <p class="message">${chatCard.text}<span class="time">${chatCard.date}</span></p>
                        <p class="name"><span class="sender">Sender:</span>${chatCard.user}</p>
                    </div>`
    chats.forEach(chat=>{
        const chatRoomId = chat.getAttribute('id');
        if (chatRoomId === chatCard.groupType) {
            chat.innerHTML += newItem;
        }
        chat.getAttribute('id') !== id ?chat.classList.add('hide') :chat.classList.remove('hide')  ;
    });
};

const addChat = ()=>{
    rooms.forEach(room=>{
        if (room.classList.contains('selected')) {
            const getActiveRoom = room.getAttribute('id');
            return getActiveRoom;
        }
    });
}
