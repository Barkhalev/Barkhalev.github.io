// var colorPrimary = 'red';
let colorSecondary = 'red';
const colorBase = 'gold';

console.log(colorSecondary);
console.log(colorBase);

// Типы данных JS

let numVar = 23; //number
let strVar = 'Любой строки'; // string
let booVar = true; // boolean true false
let undefVar = undefined; //Undefined - значение еще небыло сщздано
let nullVar = null; //Null - создали но не назначили значение

let objVar = {
    //переменная 1 colorSecondary = 'red';
    //переменная 2 colorBase = 'red';
} //object - коллекции значений

// user = {
//     name: 'Max',
//     age:'31'
// }
// console.log(user.name,user.age);

let string = 'Hello' + ' world!';
console.log(string);

// let val1 = '4'; //string
// let val2 = '5'; //string
// let sum = val1 + val2;
// console.log(sum);

let val1 = 4; //number
let val2 = 5; //number
let sum = val1 + val2;
console.log(sum);


// let obj2 = new Object();
// let obj = {};
let user = {
    name: 'Max',
    age: 37,
    status: {
        admin: true,
        privace: false
    }
};
console.log('До создания возраста', user);

setTimeout(() => {
user.age = 31;

console.log('После создания возраста', user.name, user.age + 1, user.status);
},2500)

setTimeout(() => {
    delete user.age;

    console.log('После удаления возраста', user.name, user.age + 1, user.status);
},5000)
    


const user1 = {
    name: 'Max',
    status: {
        admin: true,
        privace: false
    }
};
console.log('До создания возраста', user1);