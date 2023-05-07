/*let arr = [
    1,
    2,
    3,
    4,
] //array, obgect

let obj = {
    prop: true
}

console.log(typeof arr);
console.log(typeof obj);
console.log(obj['prop']);
console.log(obj.prop);

delete obj['prop'];
console.log(obj['prop']);
delete obj.prop;
console.log(obj.prop);
console.log(obj);

arr[0];
arr[1] = 'string';
delete arr[2];
arr.lenght

let user = {
    name: '',
    age: 123 ,
    status: false,
} //object, obgect

let cart = {

}
*/

/*if(false) {

} else if(false) {

} else if(true) {

} else {

}

if (true) console.log('Hello World');
if (true) {
   console.log('Hello World'); 
} 
if (false) console.log('Hello World');

switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

/*for ( let i = 0; i < 10; i++) {
    console.log(i);
}

let i = 0;
while ( i < 10) {
    console.log(i);
    i++;
}

let j = 0;
do { console.log(j);
   j++; 
} while ( j < 10 );


for (const iterator in object) {

}
for (const iterator of object) {

}
*/

/*for ( let i = 1; i <= 10; i++) {
    if ( i === 6) continue; //пропустить итерацию
    if ( i === 8) continue; //пропустить итерацию
    console.log(i);      
}
console.log("Конец работы");

for ( let i = 1; i <= 10; i++) {
    if ( i === 6) break; //- выйти из цикла до его завершения
    console.log(i);      
}
console.log("Конец работы");
*/

/*function login(messege) {
    console.log(messege);
}

login('Hello world');
login('Yuor was logged');

function имя ( параметры, через, запятую) {
    // тело функции
}


console.log('-------Function Declaration переносится вверх кода и используется во всем коде--------');
function NameOfTheFunction(messege) {
    console.log(messege);
}
NameOfTheFunction('Hello world');

console.log('-------Function Expression не переносится вверх кода и используется только после определения функции--------');
const func = function(messege) {
    console.log(messege);
}
func('Hello world');
*/


/*function printOrder ( bread, cucumber, potato, carot) {
    console.log('bread', bread);
    console.log('cucumber', cucumber);
    console.log('potato', potato);
    console.log('carot', carot);
}
printOrder(10, 7, 21, 15);
*/

/*function sum( a, b) {
    return a + b;
}
console.log( sum( 1, 2));

function sum( a = 0, b = 0) {
    let result = a + b;
    return result;
}
console.log( sum( 1, 2));

function func( arr, obj, num, string, bulean) {

}
func([1,2,3,],{status: false}, 34, 'text', true);
*/

/*(function(){
    console.log('Hello World');
})();
*/

/*console.log('-----Стрелочная функция-----');
(arg1, arg2, arg3, ...) => {
   //...
   if (arg1 === false) return;
    console.log('Hello World');
}

let func = (arg1, arg2, arg3) => {
    if (arg1 === false) return;
    console.log('Hello World');
}
func(false, 1, 2)
func(true, 1, 2)

function print() {
    console.log(this);
}

let obj = {
    status: true,
    name: 'Max',
    func: function() {
        console.log(this.status);
        console.log(this.name);
    }
}
obj.func();
print();

console.log(Date);
console.log(Math.PI);
*/

/*
let arr = [1, 2, 3, 4]
let num = 1234
console.log(Array.isArray(num));
*/

/*console.log('---------Методы работы с массивами-------');
pop - Удаляет последний элемент из массива и возвращает его arr.pop()
push - Добавляет элемент в конец массива arr.push()
shift - Удаляет из массива первый элемент и возвращает его arr.shift()
unshift - Добавляет элемент в начало массива arr.unshift()
*/

//let fruits = ["Яблоко", "Апельсин", "Груша"];
//fruits[100] = 'Малина'

/*//fruits.pop(); // Удалила последний элемент
console.log(fruits);
console.log(["Яблоко", "Апельсин", "Груша"].pop()); // Удалила последний элемент
console.log(fruits.pop);*/

/*console.log(fruits);
let deletedValue = fruits.pop();// Удалила последний элемент
console.log(deletedValue);
console.log(fruits);*/

/*console.log(fruits);
let deletedValue = fruits.shift();// Удалила первый элемент
//let deletedValue = fruits[fruits.length - 1];
//delete fruits[fruits.length - 1];
console.log(deletedValue);
console.log(fruits);*/

/*console.log(fruits);
let addedFinishLength = fruits.push('Виноград');//Добавляет элемент в конец массива
let addedStartLength = fruits.unshift('Папайя');//Добавляет элемент в начало массива 

console.log(addedFinishLength);
console.log(addedStartLength);
console.log(fruits);*/

/*for (let i = 0; i < fruits.length; i++) {
console.log(fruits[i]);
}
for (const i of fruits) {
    console.log(i);
}*/

/*console.log('---------Методы работы с массивами-------');
arr.splice(index [ , deleteCount, elem1, ..., elemN ]);//Универсальный метод
arr.slice([Start],[end]]);//возвращает подмассив массива
arr.concat(arg1,arg2 ....);//Объединяет разные массивы
for.Each(func); //применить функцию для каждого элемента массива
arr.forEach(function(item, index, array)) {
    //... делать что-то с item
};
arr.revers(); //Развернуть массив
arr.map(func); //Изменяет элементы массива и возвращает измененный массив 
arr.filter(func); //Фильтрует элементы массива и возвращает измененный массив 


Array.isArray(fruits);
console.log(Array);
console.log(fruits);*/

//fruits.splice( 1, 1, 'Бананы', 'Виноград');
/*console.log(fruits.splice( 1, 1, 'Бананы', 'Виноград'));
console.log(fruits);*/
/*fruits.splice( 1, 0, 'Бананы', 'Виноград');
console.log(fruits);*/

/*let fruits = ["Яблоко", "Апельсин", "Груша", "Банан"];
console.log(fruits.splice(2));*/

/*let fruits = ["Яблоко", "Апельсин", "Груша", "Банан"];
console.log(fruits.slice(1, 3));//возвращает подмассив массива
*/

/*let fruits = ["Яблоко", "Апельсин", "Груша", "Банан"];
//console.log(fruits.concat(1, 3, false));//Объединяет разные массивы
console.log(fruits.concat('Соль', 'Перец', 'Куркума'));//Объединяет разные массивы
*/

/*console.log('---------Функции работы с массивами-------');
//callback  Функции
function sum(a, b) {
    return a + b;
}
function printMath(func, a, b ) {
    return () => {
        return func(a, b)
    };
}
let temp = printMath(sum, 1, 2);
console.log(temp());
*/

/*let nums = [1, 2, 3];
nums.forEach(function(item, index, array) {
    console.log('item', item);
    console.log('index', index);
    console.log('array', array);
    console.log('--------------');
})*/

/*let nums = [1, 2, 3];
nums.forEach(function(item) {
    console.log('item', item + 1);
    console.log('--------------');
})*/

/*console.log('------По клику выбрать элемент списка------');
let list = Array.from(document.querySelectorAll('li'))
//console.log(Array.isArray(list));
list.forEach(function(item) {
    item.addEventListener('click', function() {
        console.log(this);
    })
})*/

/*console.log('------Развернуть массив------');
let fruits = ["Яблоко", "Апельсин", "Груша", "Банан"];
console.log(fruits.reverse());*/

/*console.log('------Изменяет элементы массива и возвращает измененный массив------');
let fruits = ["Яблоко", "Апельсин", "Груша", "Банан"];

let lovedForEach = fruits.forEach(function(item, index, array) {
    return 'Я люблю ' + item;
}) 
let lovedMap = fruits.map(function(item, index, array) {
    return 'Я люблю ' + item;
}) 
console.log(fruits);
console.log(lovedForEach);
console.log(lovedMap);*/

console.log('------Фильтрует элементы массива и возвращает измененный массив------');
let fruits = ["Яблоко", "Апельсин", "Груша", "Банан", "Апельсин"];
let fltr = fruits.filter(function(item, index, array) {
    return item !== 'Апельсин';
})
console.log(fltr);




































