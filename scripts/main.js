let ul = document.querySelector("ul");
let button = document.querySelector("button");

const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};

button.addEventListener("click", () => {
    let li = document.createElement("li");
    li.innerHTML = `<span>text</span> Lorem, ipsum.`;
    ul.append(li);
});

ul.addEventListener("click", (e) => {
    console.log(e.target.tagName);

    if (e.target.tagName === "SPAN") {
        e.target.innerText = e.target.innerText + "!";
    }
    if (e.target.tagName === "LI") {
        e.target.style.color = `rgb(${randomNum(0, 255)}, ${randomNum(
            0,
            255
        )}, ${randomNum(0, 255)})`;
    }
});

const show = (content) => {
    let container = document.createElement("div");
    container.classList.add("popup");
    let popupModal = document.createElement("div");
    popupModal.classList.add("popup__modal");
    let popupClose = document.createElement("div");
    popupClose.classList.add("popup__close");
    popupClose.innerHTML = "&#215;";
    let popupContent = document.createElement("div");
    popupContent.classList.add("popup__content");

    popupContent.append(content);

    container.addEventListener("click", (e) => {
        /**
         * @type {HTMLElement}
         */
        let target = e.target;

        if (
            target.classList.contains("popup") ||
            target.classList.contains("popup__close")
        ) {
            container.remove();
        }
    });

    popupModal.append(popupClose, popupContent);
    container.append(popupModal);
    document.body.append(container);
};

const popup = (event) => {
    /**
     * @type {HTMLElement}
     */
    let target = event.target;

    if (!target) return;

    if (target.tagName !== "A") {
        target = target.closest("a");
    }

    if (target.tagName !== "A") return;
    let type = target.dataset.type;

    if (!type) return;

    event.preventDefault();

    let content = "";

    if (type === "text") {
        content = target.dataset.content;
    }

    if (type === "img") {
        let img = document.createElement("img");
        img.setAttribute("src", target.dataset.content);
        content = img;
    }

    if (type === "content") {
        let id = target.dataset.id;
        if (!id) return;

        let idChild = document.getElementById(id).children[0];
        if (!idChild) return;
        content = idChild.cloneNode(true);
    }

    show(content);
};

document.body.addEventListener("click", popup);

anime({
    targets: "li",
    translateX: 250,
    delay: 3000,
});
