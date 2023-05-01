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

appendElementToParent(main, screen);
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
      keyboardData.find(k => {

      if (k =='ShiftLeft' && keySymbols[k] === key) {
         keyElement.classList.add('ShiftLeft');
      } if (k =='ShiftRight' && keySymbols[k] === key) {
         keyElement.classList.add('ShiftRight');
      } if (k =='AltLeft' && keySymbols[k] === key) {
         keyElement.classList.add('AltLeft');
      } if (k =='AltRight' && keySymbols[k] === key) {
         keyElement.classList.add('AltRight');
      } if (k =='ControlLeft' && keySymbols[k] === key) {
         keyElement.classList.add('ControlLeft');
      }  if (k =='ControlRight' && keySymbols[k] === key) {
         keyElement.classList.add('ControlRight');
      } else if (keySymbols[k] === key && k != 'ShiftLeft' && k =='ShiftRight' && k =='AltLeft' && k =='AltRight' && k =='ControlLeft' && k =='ControlRight') {
            const classToAdd = k.toString();
            keyElement.classList.add(classToAdd);
         } 
      });
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

      if (key === element && event.type === 'keydown') {
         keyboardKey.classList.add('highlight');
         screen.value += keyboardKey.textContent;
      } 
      if (key === 'ArrowUp') {
         screen.value += '↑';
       } else if (key === 'ArrowDown') {
         screen.value += '↓';
       } else if (key === 'ArrowLeft') {
         screen.value += '←';
       } else if (key === 'ArrowRight') {
         screen.value += '→';
       }
       
       else if (key === 'Enter') {
         screen.value += '\n';
       }
       
       else if (key === 'Tab') {
         event.preventDefault();
         screen.value += '  ';
       }
 
       else if (key === 'Backspace') {
         screen.value = screen.value.slice(0, screen.value.length - 1);
       }

       else if (key === 'Delete') {
         screen.value = screen.value.slice(0, screen.value.length);
       }
 
       else if (key === 'Space') {
         screen.value += ' ';
       }
 
      if (event.type === 'keyup' && keyboardKey.classList.contains('highlight')) {
         keyboardKey.classList.remove('highlight');
      }
   }
}
document.addEventListener('keydown', highlightKeyOnKeyboard);
document.addEventListener('keyup', highlightKeyOnKeyboard);


