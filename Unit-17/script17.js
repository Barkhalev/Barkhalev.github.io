// var colorPrimary = 'red';
/*let colorSecondary = 'red';
const colorBase = 'gold';

console.log(colorSecondary);
console.log(colorBase);
*/

// Типы данных JS

/*let numVar = 23; //number
let strVar = 'Любой строки'; // string
let booVar = true; // boolean true(истина/правда) false(ложь)
let undefVar = undefined; //Undefined - значение еще небыло сщздано
let nullVar = null; //Null - создали но не назначили значение
let objVar = {} //object - коллекции значений
*/

//Операторы присваивания
/*
Математические
Сложение +, можем складывать строки
Вычитание - 
Умножение *
деление / 
Взятие остатка от деления %
Возведение в степень **.
*/
let var1 = 23;
let var2 = 3;
console.log((var1 - 2 )* var2);

// Операторы сравнения
/*
Равно (==)
Не равно (!=)
Строго равно (===)
Строго не равно (!==)
Больше(>)
Больше или равно (>=)
Меньше(<)
Меньше или равно(<=)
*/
var1 = 3;
var2 = 7;
console.log(var1 == var2);
console.log(var1 !== var2);
console.log(var1 >= var2);

// Логические операторы
/*
Логическое И -(&&)
Логическое ИЛИ -(||)
Логическое НЕ -(!)
*/
var1 = 5;
var2 = 7;
console.log(var1 > var2);
console.log(true && true);
console.log(false || true);
console.log(!false);
console.log(!true);

const user = {
    age: 23
}

if (!(user.age > 18)){
    console.log("Совершеннолетний");
}else {
    console.log("Не совершеннолетний");
}
if (user.age > 18){
    console.log("Совершеннолетний");
}else {
    console.log("Не совершеннолетний");
}

if (true){
    console.log("Совершеннолетний");
}else {
    console.log("Не совершеннолетний");
}
if (!true){
    console.log("Совершеннолетний");
}else {
    console.log("Не совершеннолетний");
}

//Тернарный оператор
// логическое значение ? вернется если истина : вернется если ложь
let age = 19;
let teens = age <= 18 ? false : true;
console.log("Совершеннолетний", teens);

// typeof  - узнать какой тип переменной 
console.log(typeof age);
console.log(typeof teens);