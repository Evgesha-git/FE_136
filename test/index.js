

function f(){
    let item = document.querySelector('.square')
    let a = 0;
    function t(){
        a += 10;
        item.style.marginLeft = a + 'px';

        if (a < 1000) {
            setTimeout(() => t(), 100);
        }
    }

    setTimeout(() => {
        t();
    }, 100);
}

f();

if (window.Worker) {
    let worker = new Worker('worker.js');

    function f1(){
        worker.postMessage({data: 40});
    }

    worker.onmessage = function (e){
        console.log(e.data);
    }

    f1();
}

/**
 * Promise
 *          pending
 *      |           |
 *  resolve     Reject
 */