import {initializeApp} from 'firebase/app';
import { getFirestore, collection, doc, onSnapshot, addDoc, orderBy, where, query } from'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDeFKLM7vrxRXG_jN62q_-fvhGx0RpCXS4",
    authDomain: "javascript-playground-92ae2.firebaseapp.com",
    projectId: "javascript-playground-92ae2",
    storageBucket: "javascript-playground-92ae2.appspot.com",
    messagingSenderId: "794213238473",
    appId: "1:794213238473:web:5bb09ed6ba2f067417ef18",
    measurementId: "G-C8PF6K5YM5"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const chats = collection(db,'chats');

class MessageModel{
    user;
    text;
    groupType;
    date = new Date();
    constructor(user, text, type){
        this.user = user;
        this.text = text;
        this.groupType = type;
    }
    addChat() {
        const chat = {'user':this.user,'text':this.text,'groupType':this.groupType,'date':this.date};
    return addDoc(chats,chat);
    }
     getChats(query='general',callback){
      const q=  query(chats,where("groupType", "==", query),orderBy('date','asc'));
        onSnapshot(q,snapshot=>{
            const changes = snapshot.docChanges();
            changes.forEach(change=>{
                const doc = change.doc;
                if (change.type==='added') {
                    /* Updates UI with Callback */
                    callback(doc.data(),doc.id);
                    console.log(doc.data(),doc.id, 'Added chat');
                }else if (change.type==='modified'){
                    console.log(doc.data(),doc.id, 'Modified chat');
                }else{
                    console.log(doc.data(),doc.id, 'Chat deleted');
                }
            });
        });
    }
}
/* Add chat to datatbase */
const sendChat = body=>{
    const chat = {'user':body.user,'text':body.text,'groupType':body.groupType,'date':body.date};
    return addDoc(chats,chat);
};

const testChat = new MessageModel('mario','Hi guys','general');

/* Get chat from datatbase */
const q=query(chats,where("groupType", "==", "general"),orderBy('date','asc'));
const chatSnapshot = onSnapshot(q,snapshot=>{
    const changes = snapshot.docChanges();
    changes.forEach(change=>{
        const doc = change.doc;
        if (change.type==='added') {
            console.log(doc.data(),doc.id, 'Added chat');
        }else if (change.type==='modified'){
            console.log(doc.data(),doc.id, 'Modified chat');
        }else{
            console.log(doc.data(),doc.id, 'Chat deleted');
        }
    });
});

/* Delete chat from datatbase */
// const deleteChat = body=>{
//     const chat = {'user':body.user,'text':body.text,'groupType':body.groupType,'date':body.date};
//     const docRef = doc(chats,chat);
//     deleteDoc(docRef);
//     };
//     deleteChat(testChat);
