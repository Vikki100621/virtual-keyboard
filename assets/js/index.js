const keyboardLayout = Object.values(keySymbols);
console.log(keyboardLayout)
let body = document.body;
let wrapper = createElement('div', 'wrapper');
let header = createElement('header', 'header');
let main = createElement('main', 'main');
let footer = createElement('footer', 'footer');
let keyboard = createElement('div', 'keyboard-container');
let title = createElement('h1', 'title');

import { keySymbols } from "./moduls/symbols.js";

appendElementToParent(body, wrapper);
appendElementToParent(wrapper, header);
appendElementToParent(wrapper, main);
appendElementToParent(wrapper, footer);
appendElementToParent(main, keyboard);
createElementsOfkeyboard();


function createElement(element, ...classes) {
   const newElement = document.createElement(element);
   classes.forEach(className => newElement.classList.add(className));
   return newElement;
}

function appendElementToParent(parent, child) {
   parent.appendChild(child);
}
const addTextToElement = () => {
   title.innerHTML = 'Virtual Keyboard';
   header.appendChild(title);
}
addTextToElement();


function createElementsOfkeyboard() {
   keyboardLayout.forEach(row => {
      const rowElement = createElement('div', 'keyboard-row');
      row.forEach(key => {
         const keyElement = createElement('div', 'keyboard-key');
         keyElement.textContent = keyText;
         if (key === 'Backspace' || key === 'Tab' || key === 'Enter' || key === 'CapsLock' || key === 'ShiftLeft' || key === 'ShiftRight' || key === 'ControlLeft' || key === 'ControlRight' || key === 'AltLeft' || key === 'AltRight' || key === 'MetaLeft' || key === 'Space') {
            keyElement.classList.add('keyboard-key__width-auto');
         };
         if (key == 'Space') {
            keyElement.textContent = '';
            keyElement.style.width = '340px';
         }
         rowElement.appendChild(keyElement);
      });
      keyboard.appendChild(rowElement);
   });
}

function highlightKeyOnKeyboard(event) {
   const key = event.key;
   console.log(key)
   const keyboardKeys = document.querySelectorAll('.keyboard-key');

   for (let i = 0; i < keyboardKeys.length; i++) {
      const keyboardKey = keyboardKeys[i];

      if (keyboardKey.textContent === key ) {
         keyboardKey.classList.add('highlight');
         break;
      }
   }
}

document.addEventListener('keydown', highlightKeyOnKeyboard);
