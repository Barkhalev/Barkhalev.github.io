// let variable = 10;
// console.log(variable);

// variable++ ; //инкремент
// console.log(variable);

// let newVar = variable++ ;
// console.log(newVar);

// variable-- ; // декремент
// console.log(variable);

// let newVar1 = variable-- ;
// console.log(newVar1);

/*let obj = {
    property1:'value1',
    user: {
        age: 37,
        name: 'Max'
    }
} */

/*let object = new Object();
let array = new Array();
console.log(typeof object);
console.log(typeof array);
*/

/* let obj = {};
let arr = [
    123,
    'Hello World',
    undefined,
    {
        age: 31,
        name: 'Max'
    },
    [1,2,3,4]
];
*/

/*console.log(arr);
arr[777] = 'new element'
console.log(arr.length);
*/

/*console.log('before adding', arr);
arr[arr.length] = 'Последний элемент массива'
console.log('after adding', arr);
arr[1] = 'some new string'
console.log('after update', arr);
*/

/*delete arr[2];
console.log('after delete', arr);
*/



/* let object = {
    prop1: '',
    prop2: 123
}
*/

/* 
*Массивы - это упорядоченные коллекции
*let arr = []
*arr[index] - доступ к элементу масссива через квадратные скобки
*arr[arr.length] - добавление в конец 
*delete[] - удаление элемента массива
*/


/*let title = document.querySelector('h1');
title.innerText = 'New Hello World'
console.log(title);
*/

/*let list = document.querySelectorAll('li');
console.log(list);
*/

/*let list = Array.from(document.querySelectorAll('li'));
console.log(list);
list[3].innerText = 'Hello World';
for (let i = 0; i < list.length; i++) {
    console.log(list[i]); 
}
*/


/* 
    if(условие истинно){
        код который нужно выполнить, если условие сработает

    } else {
        код который нужно выполнить, если условие несработает
    }

    if (условие истинно){
        код который нужно выполнить
    } else if (условие истинно) {
        код который нужно выполнить
    } else {
        если ниодно из условий несработало
    }
*/

/*let year; // undefined -> false
console.log(year);
*/

/*//условное ветвление 
let year = 2015;
if (year <= 2015) {
    console.log('До 2015 года или 2015 год');
} else if (year => 2020) {
    console.log('После 2020 года или 2020 год');
} else {
    console.log('После 2015 года, но до 2020 года ');
}
*/


/*let userStatus = 'user'; //admin, user, manager, seo
if (userStatus === 'admin' ) {
    console.log('Это администратор');
} else if (userStatus === 'manager') {
    console.log('Это менеджер');
} else if (userStatus === 'seo') {
    console.log('Это СЕО специалист');
}else {
    console.log('Это простой пользователь');
}
*/

/*//switch/case
let userStatus = 'seo'; //admin, user, manager, seo
switch (userStatus) {
    case 'admin':
        console.log('Это администратор');
        break;
    case 'manager':
        console.log('Это менеджер');
        break;
    case 'seo':
        console.log('Это СЕО специалист');
        break;
    default:
        console.log('Это простой пользователь')
        break;
}
*/


//Циклы for,while, do while
// let arrFruits = ['apple', 'orange', 'grapes'];
// /*debugger;
// for (let index = 3; index < 7; index++) {
//     console.log(index);
// }*/

// /*// debugger;
// for(let i = 0; i < arrFruits.length; i++){
//     console.log(arrFruits[i]);
// }*/

// /*let i = 0;
// while ( i <= arrFruits.length) {
//     console.log(arrFruits[i]);
//     i++;
// }*/

// /*let i = 0;
// do {
//     console.log(arrFruits[i]);
//     i++;    
// } while ( i <= arrFruits );
// */


/*let arrFruits = ['apple', 'orange', 'grapes'];

for(let i = 0; i < arrFruits.length; i++){
    console.log(arrFruits[i]);
}
console.log('_______Циклы for of проходим по массивам___________________');

for (const iterator of arrFruits) {
    console.log(iterator);   
}
console.log('_______Циклы for in проходим по объектам___________________');

let obj = {
    arrFruits: ['apple', 'orange', 'grapes'],
    user: {
        age: 23,
        name: 'Max'
    },
    status: 'admin'
}
for (const iterator in obj){
    console.log('Свойство', iterator );
    console.log( 'Значение', obj[iterator]);
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^');
    if (iterator === 'status') {
        console.log('status');
        delete obj.status;  
    }
}
console.log(obj);
*/

const cart = [
    {
        id: 8798 ,
        name: 'Яблоки',
        price: 123.00 ,
        articul: 123456,
        status: true
    },
    {
        id: 1234,
        name: 'Груши',
        price: 321.43,
        articul: 654112,
        status: true
    },
    {
        id: 4132,
        name: 'Бананы',
        price: 102.78,
        articul: 966325,
        status: true
    },
    {
       id: 513 ,
        name: 'Виноград',
        price: 215.00,
        articul: 544885,
        status: true
    }
];

for (const iterator of cart) {
    console.log(iterator.name);

    for (const key in iterator) {
        if (key === 'price') {
        console.log(iterator[key] / 70);
        }
    }
}