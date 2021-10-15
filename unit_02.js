// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
let a = 7;
let b = 9;
ab = a * b;
console.log(ab);


// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.
let c = 7;
let d = 9;
cd = c / d;
// let out2 = document.querySelector('.out-2');
// out2.innerHTML = cd;

// document.querySelector('.out-2').textContent = 
document.querySelector('.out-2').textContent = cd;


// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.
let e = 3;
let f = 5;
ef = e + f;
// let out3 = document.querySelector('.out-3');
// out3.innerHTML = ef;

document.querySelector('.out-3').textContent = ef;


// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.
let e1 = '3';
let f1 = 5;
ef1 = e1 + f1;
// let out4 = document.querySelector('.out-4');
// out4.innerHTML = ef1;
document.querySelector('.out-4').textContent = ef1;
//e1 воспринимается как строка.. если вначале строка и добавить числовое значение, то значения  будут записыватся встык одно за другим как строки


// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.
let e2 = 3;
let f2 = 0;
let ef2 = e2 / f2;
// let out5 = document.querySelector('.out-5');
// out5.innerHTML = ef2;
document.querySelector('.out-5').textContent =  ef2;


// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.
let e3 = 3;
let f3 = 'Hello';
let ef3 = e3 + f3;
// let out6 = document.querySelector('.out-6');
// out6.innerHTML = ef3;

document.querySelector('.out-6').textContent = ef3;


// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.
let e4 = 3;
let f4 = 'Hello';
let ef4 = e4 * f4;
// let out7 = document.querySelector('.out-7');
// out7.innerHTML = ef4;

document.querySelector('.out-7').textContent = ef4;


// Task 8.
// По нажатию на кнопку .b-8 выполняется функция, которая выводит в div.out-8 то, что пользователь ввел в input.i-8.

let i8 = document.querySelector('.i-8'); // input
let b8 = document.querySelector('.b-8'); // button
let out8 = document.querySelector('.out-8');

b8.onclick = function t8() { 
    console.log(i8.value);
    out8.innerHTML = i8.value;
}

document.querySelector('.b-8').onclick = t8;


// Task 9.
// По нажатию на кнопку .b-9 выполняется функция t9, которая выводит в div.out-9 то, что пользователь ввел в input.i-9. Добавьте очистку input после нажатия кнопки.
let i9 = document.querySelector('.i-9'); 
// let b9 = document.querySelector('.b-9'); 
let out9 = document.querySelector('.out-9');

// b9.onclick = function t9 () { 
//     console.log(i9.value);
//     out9.innerHTML = i9.value;
//     i9.value = '';
// }

function t9() {
    console.log(i9.value);
    out9.innerHTML = i9.value;
    i9.value = '';
}

document.querySelector('.b-9').onclick = t9;


// Task 10.
// По нажатию на кнопку .b-10 выполняется функция t10, которая выводит в div.out-10 то, что пользователь ввел в input.i-10 умноженное на 20.
let i10 = document.querySelector('.i-10'); 
// let b10 = document.querySelector('.b-10'); 
let out10 = document.querySelector('.out-10');
// b10.onclick = function t10 () { 
//     console.log(i10.value);
//     // out10.innerHTML = i10.value;
//     let b = +i10.value;
//     let b2 = b * 20;
//     console.log(b2);
//     out10.innerHTML = b2;
//     i10.value = '';
// }
function t10() {
    console.log(i10.value);
    // out10.innerHTML = i10.value;
    let b = +i10.value;
    let b2 = b * 20;
    console.log(b2);
    out10.innerHTML = b2;
    i10.value = '';
}

document.querySelector('.b-10').onclick = t10;


// Task 11.
// По нажатию на кнопку .b-11 выполняется функция t11, которая выводит на страницу в .out-11 число, которое ввел пользователь в i-11 и к нему добавленное число 55. В этой задаче мы не приводим к числу полученное из input.
let i11 = document.querySelector('.i-11'); 
let out11 = document.querySelector('.out-11');
// let b11 = document.querySelector('.b-11'); 

function t11() {
    console.log(i11.value);
    let c = +i11.value;
    // let c2 = c + 55;
    console.log(c + "55");
    out11.innerHTML = c + "55";
    i11.value = '';
}

document.querySelector('.b-11').onclick = t11;


// Task 12.
// По нажатию на кнопку выполняется функция t12. Функция должна получить данные из input i.12-1 и i.12-2 (пользователь вводин в них фамилию и имя). После чего вывести в .out-12  строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия. Обращаю ваше внимание - с этого момента мы работаем строго по заданию. Hello - с большой буквы. Между Hello имя один пробел (вы же включили отображение пробелов?). Вы не добавляете "от себя" - запятые, любые другие слова и символы. Аналогичные правила действуют и дальше по курсу.
let i121 = document.querySelector('.i-12-1'); 
let i122 = document.querySelector('.i-12-2'); 
let out12 = document.querySelector('.out-12');

function t12() {
    let g1 = i121.value;
    let g2 = i122.value;
    let g12 = "g1 " + "g2"
    console.log("g1" + " " + "g2");
    out12.innerHTML = "g1" + " " + "g2";
    i121.value = '';
    i122.value = '';
}

document.querySelector('.b-12').onclick = t12;


// Task 13.
// При нажатии кнопки .b-13 выполняется t13. Функция получает из input.i-13-1 и .i-13-2 числа в переменные a, b. После чего в .out-13 выводит их сумму. Преобразовывайте a, b в числа!!!!
let i131 = document.querySelector('.i-13-1'); 
let i132 = document.querySelector('.i-13-2'); 
let out13 = document.querySelector('.out-13');

function t13() {
    let a = +i131.value;
    let b = +i132.value;
    let ab = a + b;
    console.log(a + b);
    out13.innerHTML = ab;
    i131.value = '';
    i132.value = '';
}

document.querySelector('.b-13').onclick = t13;


// Task 14.
// По нажатию кнопки .b-14 выполняется функция t14. Она заменяет значение value в input.i-14 на строку 'Go';

let i14 = document.querySelector('.i-14'); 

function t14() {
    let x = i14.value;
    console.log(x);
    // out14.innerHTML = x;
    document.querySelector('.i-14').value = 'Go';
    // i14.value = '';
}

document.querySelector('.b-14').onclick = t14;


// Task 15.
//  По нажатию кнопки .b-15 выполняется функция t15. Она присваивает .i-15 свойство style.border = "4px solid red";

function t15() {
    document.querySelector('.i-15').style.border = "4px solid red";
}

document.querySelector('.b-15').onclick = t15;


// Task 16.
//По нажатию на кнопку .b-16 выполняется функция t16. Функция получает из .i-16-1 и i-16-2 числа. Выведите в .out-16 сумму данных чисел по нажатию кнопки b-16. Не переводите полученное из input в число!!!!
let i161 = document.querySelector('.i-16-1'); 
let i162 = document.querySelector('.i-16-2'); 
let out16 = document.querySelector('.out-16');

function t16() {
    let r1 = i161.value;
    let r2 = i162.value;
    let r12 = r1 + r2;
    console.log(r1 + r2);
    out16.innerHTML = r12;
    i161.value = '';
    i162.value = '';
}

document.querySelector('.b-16').onclick = t16;


// Task 17.
// По нажатию на кнопку .b-17 выполняется функция t17. Функция получает из .i-17 число. Изучите работу кода и запомните отличия. Попробуйте ввести числа 5, 4zz, zz4, -200, 33.05

function t17() {
    let a = document.querySelector('.i-17').value;
    document.querySelector('.out-17-1').innerHTML = +a;
    document.querySelector('.out-17-2').innerHTML = parseInt(a, 10);
    document.querySelector('.out-17-3').innerHTML = Number(a);
    document.querySelector('.i-17').value = '';
}

document.querySelector('.b-17').onclick = t17;


// Task 18.
//  По нажатию на кнопку .b-18 выполняется функция t18. Функция получает из .i-18 число в переменную a. Выводит в out-18 результат операции parseFloat(a). Попробуйте ввести значения 5, 33.02, 33.9a, -20.01

function t18() {
    let a = document.querySelector('.i-18').value;
    console.log(a);
    document.querySelector('.out-18').innerHTML = parseFloat(a);
    document.querySelector('.i-18').value = '';
}

document.querySelector('.b-18').onclick = t18;


// Task 19.
// По нажатию кнопки .b-19 функция t19 дожна в out-19 вывести сумму двух отрицательных чисел из input .i-19-1 и .i-19-2. 

let i191 = document.querySelector('.i-19-1'); 
let i192 = document.querySelector('.i-19-2'); 
let out19 = document.querySelector('.out-19');

function t19() {
    // let n1 = i191.value;
    // let n2 = i192.value;
    let n = +i191.value + +i192.value;
    console.log(n);
    // n = parseInt(n);
    out19.innerHTML = n;
    i191.value = '';
    i192.value = '';
}

document.querySelector('.b-19').onclick = t19;


// Task 20
// При нажатии на кнопку .b-20 в out-20 выводится число - сколько раз была нажата кнопка .b-20;
let count = 0;
let out20 = document.querySelector('.out-20');

function t20() {
    count = count + 1; // можно сократить count++ (count + 1)
    out20.innerHTML = count;// тут допишите вывод в out-20
    console.log(count);
    // document.querySelector('.i-20').value = '';
}

document.querySelector('.b-20').onclick = t20;