/**
 * События мыши
 * События клавиатуры
 * События документа Window
 * События формы
 * События буфера обмена
 * События Перетаскивания
 * События медиа
 * События CSS
 */

(function () {
    const form = document.querySelector("form");
    const text = document.querySelector("input[type=text]");
    // const color = document.querySelector("input[type=color]");
    // const regExp = /[А-ЯЁ]+/g;

    // text.addEventListener("input", () => {
    //     if (!regExp.test(text.value)) {
    //         text.classList.add("error");
    //     } else {
    //         text.classList.remove("error");
    //     }
    // });
    // text.addEventListener("focus", () => {
    //     text.classList.remove("error");
    // });

    // color.addEventListener("change", (e) => {
    //     console.log(color.value);
    //     document.body.style.background = color.value;
    // });
    const todoContainer = document.querySelector('.todo__items');

    const createToDoItem = function (text) {
        let li = document.createElement('li');
        li.classList.add('todo__item');

        let check = document.createElement('input');
        check.setAttribute('type', 'checkbox');
        // check.disabled = true;

        let textSpan = document.createElement('span');
        textSpan.innerText = text;

        const doneItem = (event) => {
            console.log(event);
            li.classList.toggle('done');
            // if (event.target.tagName !== 'INPUT'){
            //     check.checked = !check.checked;
            // }
            if (event.target !== check){
                check.checked = !check.checked;
            }
        }

        li.addEventListener('click', doneItem);


        li.append(check, textSpan);
        return li;
    }


    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let item = createToDoItem(text.value);
        text.value = '';
        todoContainer.append(item);
    });

    // const cursor = document.querySelector('.cursor');
    const cursor = document.querySelectorAll('*');

    const width = window.innerWidth;
    const height = window.innerHeight;

    const randomPos = (max) => {
        return Math.floor(Math.random() * max);
    }
    
    console.log(cursor);

    [...cursor].forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.left = randomPos(width - item.offsetWidth) + 'px';
            item.style.top = randomPos(height - item.offsetHeight) + 'px';
        });
    })

    // cursor.addEventListener('mouseover', () => {
    //     cursor.style.left = randomPos(width - 100) + 'px';
    //     cursor.style.top = randomPos(height - cursor.offsetHeight) + 'px';
    // });

    document.body.addEventListener('mousemove', (event) => {
        // console.log(event.pageX + ' : ' + event.pageY);
        // cursor.style.left = event.pageX + 'px';
        // cursor.style.top = event.pageY + 'px';
    });
})();
