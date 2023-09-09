/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/ui.js":
/*!***********************!*\
  !*** ./scripts/ui.js ***!
  \***********************/
/***/ (() => {

eval("const roomList = document.querySelector(\".room-options\");\nconst rooms = document.querySelectorAll(\".room\");\nconst messageField = document.querySelector(\"[name='message']\");\nconst updateField = document.querySelector(\"[name='update']\");\nconst sendButton = document.querySelector(\"[name='send']\");\nconst updateButton = document.querySelector(\"[name='update']\");\nconst chats = document.querySelectorAll(\".chat\");\nconst selectTab = id=>{\n    rooms.forEach(room=>{\n        room.getAttribute('id') !== id ?room.classList.remove('selected') :null ;\n    });\n    chats.forEach(chat=>{\n        chat.getAttribute('id') !== id ?chat.classList.add('hide') :chat.classList.remove('hide')  ;\n    });\n}\nroomList.addEventListener('mouseout',e=>{\n    \n    if (e.target.tagName==='P' && (e.target.classList.contains('hover')||e.target.classList.contains('selected'))) {\n        e.target.classList.remove('hover');\n    }\n});\nroomList.addEventListener('mousemove',e=>{\n    \n    if (e.target.tagName==='P' && !e.target.classList.contains('hover') && !e.target.classList.contains('selected')) {\n        e.target.classList.add('hover');\n    }\n});\nroomList.addEventListener('click',e=>{\n    if (e.target.tagName==='P' && !e.target.classList.contains('selected')) {\n        const id = e.target.getAttribute('id');\n        e.target.classList.remove('hover');\n        e.target.classList.add('selected');\n        \n        selectTab(id);\n        \n    }\n});\n\n\n//# sourceURL=webpack://chat_room/./scripts/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./scripts/ui.js"]();
/******/ 	
/******/ })()
;