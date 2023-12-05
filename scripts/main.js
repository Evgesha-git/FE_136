(function () {
    const slider = (selector) => {
        const slidersContainer = document.querySelectorAll(selector);

        const sliderHandler = (container) => {
            /**
             * @type {HTMLElement}
             */
            const slides = container.querySelector(".slides");
            if (!slides || slides.children.length === 0) return;

            const buttons = container.querySelectorAll(".button");
            if (!buttons || buttons.length < 2) return;

            const pagination = container.querySelector(".pagination");

            /**
             * @type {HTMLElement[]}
             */
            const items = [];

            if (pagination) {
                [...slides.children].forEach((elem, i) => {
                    let item = document.createElement("span");
                    if (i === 0) {
                        item.classList.add("active");
                    }
                    item.addEventListener('click', () => paginationHandler(i));
                    items.push(item);
                    pagination.append(item);
                });
            }

            function paginationHandler(num){
                slides.style.transform = `translateX(-${num * 100}%)`;

                items.forEach((item, i) => {
                    if (i === num) {
                        item.classList.add("active");
                    } else {
                        item.classList.remove("active");
                    }
                });
            };

            const switchSlide = (event) => {
                const buf = event.target.classList.contains("next");

                /**
                 * @type {string}
                 */
                let x = slides.style.transform || "0";
                x = x.replace("translateX(", "");
                x = Math.abs(parseInt(x));

                if (buf) {
                    if (x < slides.children.length * 100 - 100) {
                        // ((slides.children.length - 1) * 100)
                        x += 100;
                    } else {
                        x = 0;
                    }
                } else {
                    if (x > 0) {
                        x -= 100;
                    } else {
                        x = slides.children.length * 100 - 100;
                    }
                }

                if (items.length > 0) {
                    let marker = x / 100;
                    items.forEach((item, i) => {
                        if (i === marker) {
                            item.classList.add("active");
                        } else {
                            item.classList.remove("active");
                        }
                    });
                }

                slides.style.transform = `translateX(-${x}%)`;
            };

            buttons.forEach((button) =>
                button.addEventListener("click", switchSlide)
            );
        };

        slidersContainer.forEach((slider) => sliderHandler(slider));
    };

    slider(".slider__container");
})();
