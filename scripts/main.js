// let a = 126;


// function f() {
    // Выполняет действия
//     a = 'string'
// }

// function f2 (){
//     return true;
// }

// f();

// (function(){

// })()

function f1 (){
    console.log(arguments);
    let rez = []

    for (let val of arguments){
        if (typeof val === 'number'){
            rez.push(val ** 2);
        }
    }

    return rez;
}

console.log(f1(1, 2, 3, 'a'));

// let arr = [1, 2, 3, 4, 5];

// const [a, b, c, ...d] = arr;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// let a = 3, b = 10;

// [a, b] = [ b, a];

// console.log(a);
// console.log(b);

let a = [1, 2, 3];
let b = a;
let c = [...a];
/**
 * let c = [];
 * for (let i = 0; i < a.length; i++){
 *  c.push(a[i]);
 * }
 */

console.log(a);
console.log(b);
console.log(c);

a.push(4);

console.log(a);
console.log(b);
console.log(c);

/**
 * @param {number} num 
 */
function mult (num){
    let a = num ** 2;
    let b = num ** 3;
    return [a, b];
}

let [num1, num2] = mult(5);

console.log(num1);
console.log(num2);

/**
 * @param {number} h 
 */
function func7 (h) {
    for (let i = 1; i <= h; i++){
        let s = '';
        for (let j = 0; j < i; j++){
            // if (arguments[1]){
            //     s += arguments[1];
            // } else {
            //     s += i;
            // }

            s += (arguments[1] !== ' ' && arguments.length > 1) ? arguments[1] : i;
        }
        document.write(s + '</br>');
    }
}

func7(7, 34);

function fib (num) {
    if (num <= 1) return num;
    return fib(num - 1) + fib(num - 2);
}

// fib (3) -> (fib (2) + fib(1)) -> ((fib(1) + fib (0)) + 1) -> (1 + 1) -> 2
// <-----------------------------------------------------------------------|

let num = 0;
let arr = [];
while (1) {
    let buff = fib (num);
    num++;
    if (buff >= 1000) break;
    arr.push(buff);
}   

console.log(arr);

function makeCounter() {
    let count = 0;
    
    return function (){
        return count++;
    }
}

const counter1 = makeCounter();
const counter2 = makeCounter();


const memoize = function (fn) {
    let cache = {};
    return function (...args) {
        let n = args[0];
        if (n in cache){
            return cache[n];
        } else {
            let result = fn(n);
            cache[n] = result;
            return result
        }
    }
}

const fib2 = memoize (
    (num) => num <= 1 ? num : fib2(num - 1) + fib2(num - 2)
);

/**
 * @param {number} num 
 */
function func10 (num) {
    if (num <= 9) return num;
    let rez = 0;
    for (let n of num.toString()) {
        rez += +n; // rez = rez + Number(n)
    }
    if (rez > 9) {
        return func10(rez);
    } else {
        return rez;
    }
}

console.log(func10(7235647823));

function * gen () {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    yield 6;
    yield 7;
    return 8;
}

let gen2 = gen();

function mail(str){
    let point = str.lastIndexOf('.');
    if (point === str.length - 1 || point === -1 || point === 0) return 'Не почтовый адресс';
    let dog = str.lastIndexOf('@');
    if (dog !== str.indexOf('@')) return 'Не почтовый адресс';
    if (dog === str.length - 1 || dog === -1 || dog === 0 || dog < 3) return 'Не почтовый адресс';
    let defis = str.lastIndexOf('-');
    if (defis === str.length - 1 || defis === 0) return 'Не почтовый адресс';
    let n = str.lastIndexOf('_');
    if (n === str.length - 1 || n === 0) return 'Не почтовый адресс';

    let symbols = `абвгдеёжзиклмнопрстуфхцчшщъыьэюяАБВГДЕЁЖЗИКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ!"#$%&'()*+,/:;<=>?[\\]^{|}~ ` ;
    let nameSymbols = '!"#$%&\'()*+,-/:;<=>?@[\\]^_`{|}~';
    let nums = '1234567890.';

    for (let i = 0; i < str.length - 1; i++){
        if(str[i] === '.' && str[i + 1] === '.' || 
            str[i] === '@' && str[i + 1] === '.' ||
            str[i] === '.' && str[i + 1] === '@' ||
            str[i] === '@' && str[i + 1] === '@' ||
            str[i] === '_' && str[i + 1] === '@' ||
            str[i] === '@' && str[i + 1] === '-' ||
            str[i] === '-' && str[i + 1] === '-' ||
            str[i] === '_' && str[i + 1] === '_' ) return 'Не почтовый адресс';
        if(symbols.includes(str[i])) return 'Не почтовый адресс';
    }

    let name = str.slice(0, dog);

    if(nums.includes(name[0])) return 'Не почтовый адресс';
    for (let i = 0; i < name.length; i++){
        if (nameSymbols.includes(name[i])) return 'Не почтовый адресс';
    }

    let dom = str.slice(point);
    let domName = str.slice(dog, point);

    if(dom.length < 2 || dom.length > 11) return 'Не почтовый адресс';
    if(domName.length < 2 || domName.length > 11) return 'Не почтовый адресс';
    
    return 'Почтовый адресс верен';
}

function f4(str, l){
    for (let i = str.length; i < l; i++){
        str += ' ';
    }
    str = '* ' + str + ' *';
    return str;
}

function f12(name, suraname, lastName, groupNum){
    let title = 'Домашняя работа: «Функции»';
    let subTitle = `Выполнил: студент гр. ${groupNum}`;
    let nameText = `${lastName} ${name} ${suraname}`;

    let maxStr = 0;
    if (title.length > maxStr) maxStr = title.length;
    if (subTitle.length > maxStr) maxStr = subTitle.length;
    if (nameText.length > maxStr) maxStr = nameText.length;  

    title = f4(title, maxStr);
    subTitle = f4(subTitle, maxStr);
    nameText = f4(nameText, maxStr);

    
    let ramka = '*';

    for (let i = 0; i < maxStr + 3; i++){
        ramka += '*';
    }

    console.log(`${ramka}\n${title}\n${subTitle}\n${nameText}\n${ramka}`);
}