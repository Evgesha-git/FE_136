let items1 = document.getElementsByClassName("item");
let items2 = document.querySelectorAll(".item");

// for (let i of items1) {
//     console.log(i);
// }

let links = document.links;

// console.log([...links]);

[...items1].forEach((item, i) => {
    if (i % 2 !== 0) {
        item.style.fontSize = "26px";
    }
});

const item = document.querySelector(".test");
const button = document.getElementById("toggle");
const width = window.innerWidth;
let flag = false;

function moveItem() {
    let mr = parseInt(item.style.marginLeft) || 0;

    if (mr > width) {
        flag = !flag;
    } else if (mr < 0) {
        flag = !flag;
    }

    if (flag) {
        mr -= 1;
    } else {
        mr += 1;
    }

    item.style.marginLeft = mr + "px";

    setTimeout(() => moveItem(), 0);
}

button.onclick = function () {
    item.classList.toggle("active");
    moveItem();
};
console.log(item);

/**
 * Если надо обратиться к потомкам -> firstChild (firstElementChild), childNodes (children), lastChild (lastElementChild)
 * Между соседними элементами -> previousSibling (previousElementSibling), nextSibling (nextElementSibling)
 * Обращение к родителю -> parentNode (parentElement)
 */

let close = document.querySelector(".close");

const titleToggle = function () {
    let title = this;
    let parent = title.closest("li");
    if (!parent) return;
    parent.classList.toggle("active");
};

const titels = document.querySelectorAll(".title");

// Array.prototype.forEach.call(titels, function (item) {
//     item.onclick = titleToggle;
// });

// ([]).forEach.call(titels, function (item) {
//     item.onclick = titleToggle;
// });

const forEachHTML = Array.prototype.forEach.bind(titels);

forEachHTML(function (item) {
    item.onclick = titleToggle;
});

const target = document.getElementById("target");

target.innerHTML = `
    <form action=""><input type="text" name="" id="" /><br /><input type="text" name="" id="" /><br /><input type="text" name="" id="" /><br /><input type="text" name="" id="" /><br /><input type="text" name="" id="" /><br /><button type="submit">Submit</button></form>
`;

// target.contentEditable = true;

target.addEventListener('click', function () {
    alert('Event Listener');
});

target.addEventListener('click', function () {
    alert ('2');
});