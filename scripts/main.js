// let arr = [12, false, "Текст", 4, 2, -5, 0];
// let rez = [];

// while (arr.length) {
//     let buff = arr.pop();
    // buff = buff.toString();
    // buff = buff.split('');
    // buff = buff.reverse();
    // buff = buff.join('');
    // buff = buff.toString().split("").reverse().join("");
    // toString() -> string.split('') -> [].reverse() -> [].join('')
    // rez.push(buff);
    // rez.push(arr.pop());
// }

// console.log(rez);

// let arr2 = [5, 9, 21, , , 9, 78, , , , 6];
// let counter = 0;

// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] === undefined) {
//         counter++; // counter = counter + 1
//     }
// }

// console.log(counter);

// let arr3 = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];
// let fIndex = arr3.indexOf(0);
// let lIndex = arr3.lastIndexOf(0);
// let rez2 = 0;

// if (fIndex === -1 || lIndex === -1){
//     rez2 = 'Нулей нет';
// } else if (fIndex === lIndex) {
//     rez2 = 0;
// } else {
    // for (let i = fIndex; i < lIndex; i++){
    //     rez2 += arr3[i]; //rez2 = rez2 + arr3[i]
    // }
//     let s = arr3.slice(fIndex, lIndex);
//     while (s.length){
//         rez2 += s.pop(); // rez2 = rez2 + s.pop()
//     }
// }

// console.log(rez2);

// let h = +prompt();

// for (let i = 1; i <= h; i++){
    // let sp = '';
    // let p = '';
    
    // for (let j = 0; j < h - i; j++){
    //     sp = sp + ' ';
    // }

    // for (let j = 0; j < i * 2 - 1; j++) {
    //     p += '^';
    // }

    // document.write(`<pre>${sp + p}</pre>`);
//     document.write(`<pre>${(' ').repeat(h - i) + ('^').repeat(i * 2 - 1)}</pre>`);
// }

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// let rez3 = 0;

// for (i = 0; i < matrix.length; i++){
//     rez3 = rez3 + matrix[i][i];
// }

// console.log(rez3);

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: [1, 2, 3],
//     name: '',
//     price: 1000,
//     count: 10,
//     index: 1232,
// }

// console.log(obj.b);
// console.log(obj['a']);



/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
function f1 (a, b) { // function declaration
    return a + b;
}


const f2 = function (a, b){ // function expresion
    return a + b;
}

const f3 = (a, b) => a + b;

const f4 = (a, b, c) => {
    let d = a + b;
    let f = d * (b - c);
    return f;
}   

const f5 = x => x ** x;

console.log(f1(1, 3));
console.log(f2(4, 7));
console.log(f3(14, 37));
console.log(f4(5, 8, 22));
console.log(f5(10));

(function () {
    /**
     * Тут вариться некоторый код
     */
    var a = 1200;
    console.log('Функция закончена');
})();