// @ts-check

(function () {
    /**
     * 
     * @param {string} selector 
     */
    function tabs(selector) {
        const containers = document.querySelectorAll(selector);

        /**
         * 
         * @param {Element} container 
         */
        function tabController (container){
            const buttons = container.querySelector(".tab__buttons");
            const contents = container.querySelector(".tab__contents");
            if (!buttons) return;
            if (!contents) return;

            /**
             * 
             * @param {number} num 
             */
            const contentChange = (num) => {
                [...contents.children].forEach((item, i) => {
                    if (i === num) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            }

            /**
             * 
             * @param {Event & {target: HTMLElement}} event 
             */
            const buttonHandler = (event) => {
                let button = event.target;
                if (button.classList.contains('tab__button')){
                    [...buttons.children].forEach((elem, i) => {
                        if (elem === button){
                            elem.classList.add('active');
                            contentChange(i);
                        } else {
                            elem.classList.remove('active');
                        }
                    });
                }
            }
            
            // @ts-ignore
            buttons.addEventListener('click', (event) => buttonHandler(event));
        }

        if (containers) {
            containers.forEach(container => tabController(container));
        }
    }

    const tooltips = function (selector) {
        const elems = document.querySelectorAll(selector);
        if (!elems || elems.length === 0) return;

        const tooltipHandler = (elem) => {
            const createTooltip = (event) => {
                /**
                 * @type {HTMLElement}
                 */
                let target = event.target;
                let text = target.dataset.text;
                if (!text) return;

                let tooltipElement = document.createElement('div');
                tooltipElement.classList.add('tooltip__content');
                tooltipElement.innerHTML = text;
                tooltipElement.style.top = target.offsetHeight + 10 + 'px';

                target.append(tooltipElement);
            }

            const removeTooltip = event => {
                let target = event.target;
                let children = target.children;
    
                [...children].forEach (item => {
                    if (item.classList.contains('tooltip__content')){
                        item.style.opacity = 0;
                        // setTimeout(() => item.remove(), 300);
                        item.addEventListener('transitionend', function () {
                            this.remove();
                        });
                        // item.remove();
                    }
                });
            }

            elem.addEventListener ('mouseout', removeTooltip);
            elem.addEventListener ('mouseover', createTooltip);
        }

        elems.forEach(elem => tooltipHandler(elem));
    }

    tooltips('.tooltip');
    tabs(".tab__container");
})();
