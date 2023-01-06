'use strict';

//
// let elem = document.querySelector('#elem');
// let il = document.createElement('il');
// il.textContent = 'item';
// elem.appendChild(il)
// console.log(elem.textContent);

//
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// button.addEventListener('click', () => {
//     let li = document.createElement('li');
//     li.textContent = 'item';
//     elem.appendChild(li)
// })

//
// let parent = document.querySelector('#parent');
// let p = document.createElement('p');
// p.textContent = 'new p';
// p.addEventListener('click', () => { // повесили собітие
//     console.log(p.textContent);
// })
// parent.appendChild(p)

//
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// button.addEventListener('click', function() {
//     let li = document.createElement('li');
//     li.textContent = 'new li';
//     li.addEventListener('click', function() { // в конец ol добавляем li / по клику на li добавили '!'
//         this.textContent += '!';
//     })
//     elem.appendChild(li)
// })

//
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//     for (let i = 1; i <= 10; i++) {
//         let li = document.createElement('li');
//         li.textContent = i;
//         elem.appendChild(li)
//     }
// })

//
// let parent = document.querySelector('#parent');
// let elem = document.querySelector('#elem');
// for (let i = 0; i <= 5; i++) {
//     let inp = document.createElement('input');
//     parent.appendChild(inp);
//     inp.addEventListener('blur', () => {
//         elem.textContent = inp.value
//     })
// }

//
// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
//     elem.addEventListener('click', () => {
//         elem.remove() // удаление єлементов
//     })
// }

//
// let elems = document.querySelectorAll('ul li')
// for (let elem of elems) {
//     elem.addEventListener('click', function() {
//         elem.remove()
//     })
// }

//
// let elems = document.querySelectorAll('#parent li');
// let btn = document.querySelector('#button')
// let i = 1;
// btn.addEventListener('click', () => {
//         elems[elems.length - i].remove()     
//         i++
// });    

//
// let elems = document.querySelector('#parent');
// let btn = document.querySelector('#button')

// btn.addEventListener('click', () => {
//     elems.firstElementChild.remove() // по-другому удалим 
// });    


//
// let table = document.querySelector('#table');
// for (let i = 1; i <= 3; i++) {
//     let td = document.createElement('td');
//     td.innerHTML = i + 'n'
//     for (let j = 1; j <= 3; j++) {
//         let tr = document.createElement('tr');
//         tr.innerHTML = j;    
//         td.appendChild(tr)
//     }
//     table.appendChild(td) // в конец
// }

//
// let table = document.querySelector('#table');
// for (let i = 1; i <= 3; i++) {
//     let td = document.createElement('td');
//     td.innerHTML = i + 'n'
//     for (let j = 1; j <= 3; j++) {
//         let tr = document.createElement('tr');
//         tr.innerHTML = j;    
//         td.prepend(tr)
//     }
//     table.prepend(td) // в начало
// }

//
// let parent = document.querySelector('#parent');
// let p = document.createElement('p');
// p.textContent = '!';
// parent.insertBefore(p, before)

//
// let parent = document.querySelector('#parent');
// let btn1 = document.querySelector('#button1')
// let btn2 = document.querySelector('#button2')
// let btn3 = document.querySelector('#button3')
// let btn4 = document.querySelector('#button4')
// btn1.addEventListener('click', () => {
//     let p = document.createElement('p');
//     p.textContent = 'new';
//     parent.insertAdjacentElement('beforeEnd', p)
// });
// btn2.addEventListener('click', () => {
//     let p = document.createElement('p');
//     p.textContent = 'new';
//     parent.insertAdjacentElement('afterBegin', p)
// });
// btn3.addEventListener('click', () => {
//     let p = document.createElement('p');
//     p.textContent = 'new перед div';
//     parent.insertAdjacentElement('beforeBegin', p)
// });
// btn4.addEventListener('click', () => {
//     let p = document.createElement('p');
//     p.textContent = 'new после div';
//     parent.insertAdjacentElement('afterEnd', p)
// })

//
// let btn = document.querySelector('#btn');
// let input = document.querySelector('#input');
// let parent = document.querySelector('#parent')
// btn.addEventListener('click', () => {
//     let clone = input.cloneNode(true);
//     parent.prepend(clone)  
// })

//
// let elem = document.querySelector('#elem');
// console.log(elem.matches('div#elem')); // true. проверка на соответствие

//
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// console.log(elem1.contains(elem2)); // true. проверка на содержание

//
// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {
//     console.log('единоразовое нажатие');
//     button.removeEventListener('click', func); // удаление собітия
// }























































