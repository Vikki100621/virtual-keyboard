const keyboardLayout = Object.values(keySymbols);
const keyboardData = Object.keys(keySymbols);

let body = document.body;
let wrapper = createElement('div', 'wrapper');
let header = createElement('header', 'header');
let main = createElement('main', 'main');
let footer = createElement('footer', 'footer');
let keyboard = createElement('div', 'keyboard-container');
let title = createElement('h1', 'title');
let screen = createElement('textarea', 'textarea-block')

import { keySymbols } from "./moduls/symbols.js";

appendChildElementtoParent(main, screen);
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
   keyboardLayout.forEach(key => {
      const keyElement = createElement('div', 'keyboard-key');
      keyElement.textContent = key;
      if (key === '⌫' || key === 'Tab↹' || key === 'Enter↵' || key === 'Caps Lock⇪' || key === 'Shift⇧' || key === 'Ctrl' || key === 'Alt' || key === 'Win' || key === ' ') {
         keyElement.classList.add('keyboard-key__width-auto');
      };
      if (key == ' ') {
         keyElement.style.width = '340px';
      }
      keyboard.appendChild(keyElement);
   });
};


function highlightKeyOnKeyboard(event) {
   const key = event.code;
   const eventloc = event.location;
   const keyboardKeys = document.querySelectorAll('.keyboard-key');

   for (let i = 0; i < keyboardKeys.length; i++) {
      const keyboardKey = keyboardKeys[i];
      const element = keyboardData.find(k => keySymbols[k] === keyboardKey.textContent);
      if (key === element && event.type === 'keydown' && !keyboardKey.classList.contains('highlight')) {
         keyboardKey.classList.add('highlight');
      }

      if (event.type === 'keyup' && keyboardKey.classList.contains('highlight')) {
         keyboardKey.classList.remove('highlight');
      }
   }
}

document.addEventListener('keydown', highlightKeyOnKeyboard);
document.addEventListener('keyup', highlightKeyOnKeyboard);