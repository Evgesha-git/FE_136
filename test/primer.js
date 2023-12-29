// let timeMark = new Date;

// setTimeout(function go () {
//     let diff = new Date - timeMark;
//     console.log(diff);
//     timeMark = new Date;

//     setTimeout(go, 100);
// }, 100);

// const promise = new Promise ((resolve, reject) => {
//     setTimeout(() => resolve('Промис выполнен'), 3000);
//     setTimeout(() => reject('Промис отклонен'), 1500);
// });

// console.log(promise);
// promise
//     .then(rez => console.log(rez))
//     .catch(error => console.log(error))
//     .finally(() => console.log('Промис завершился'));

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Промис выполнен 1"), 6000);
    // setTimeout(() => reject('Промис отклонен'), 1500);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Промис выполнен 2"), 3000);
    // setTimeout(() => reject("Промис отклонен 2"), 1500);
});

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Промис выполнен 3"), 1500);
    // setTimeout(() => reject('Промис отклонен'), 1500);
});

// Promise.race([p1, p2, p3])
//     .then((rez) => {
//         console.log(rez);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// Promise.all([p1, p2, p3])
//     .then((rez) => {
//         console.log(rez);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

const myFetch = (url, method) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.send();

        xhr.onload = function (){
            if (xhr.status !== 200) {
                reject(xhr.status);
            } else {
                resolve(xhr.response);
            }
        }

        xhr.onprogress = function (event) {
            if (event.lengthComputable) {
                console.log(`Получено ${event.loaded} из ${event.total}`);
            } else {
                console.log(`Получено ${event.loaded}`);
            }
        }

        xhr.onerror = function () {
            reject ('Что то пошло не так');
        }
    });
}

let rez = myFetch('https://jsonplaceholder.typicode.com/todos/1', 'GET');

async function f(){
    console.log('1');
    let rez = await myFetch('https://jsonplaceholder.typicode.com/todos/1', 'GET');

    console.log(rez);

    console.log('2');
}

f();

// console.log('1');
// let rz;
// rez
//     .then(rez => {
//         rz = rez;
//         console.log(rez);
//     })
//     .catch(err => {
//         console.log(err);
//     });

// console.log(rz);

// rez 
//     .then()
//     .then()
//     ...