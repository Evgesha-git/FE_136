const galery = (selector) => {
    const containers = document.querySelectorAll(selector);
    if (containers.length === 0 || !containers) return;

    /**
     * @param {HTMLElement} item
     */
    const galeryHandler = (item) => {
        const images = item.querySelector(".galery__images");
        const imgContainer = item.querySelector(".galery__show");
        const imgFull = imgContainer.querySelector(".galery__img");

        images.addEventListener("click", (e) => {
            /**
             * @type {HTMLElement}
             */
            const target = e.target;
            let src = target.dataset.img;
            if (!src) {
                let parent = target.closest(".img");
                src = parent.dataset.img;
            }

            if (!src) return;

            e.preventDefault();

            imgContainer.classList.add("active");
            if (imgFull.children[0]) {
                imgFull.children[0].remove();
            }
            const img = document.createElement("img");
            img.setAttribute("src", src);
            imgFull.append(img);
        });

        imgContainer.addEventListener('click', e => {
            /**
             * @type {HTMLElement}
             */
            const target = e.target;

            if (target.classList.contains('galery__close')){
                imgContainer.classList.remove('active')
            }
        });
    };

    containers.forEach((item) => galeryHandler(item));
};

galery(".galery");
