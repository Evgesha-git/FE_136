const accordeon = selector => {
    const items = document.querySelectorAll(selector);
    if (!items || items.length === 0) return;

    const accordeonHandler = item => {  
        /**
         * @type {HTMLElement}
         * @type {HTMLElement}
         */
        const main = item.querySelector('ul');
        const addButton = item.querySelector('.button');

        addButton.addEventListener('click', () => {
            const container = document.createElement('li');
            let header = document.createElement('h3');
            let text = document.createElement('p');
            header.innerHTML = `Lorem, ipsum dolor.`;
            text.innerHTML = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, sunt quasi. Sit officiis vero delectus animi aut molestiae libero incidunt fugit nihil tempore, beatae harum, quaerat impedit voluptatibus error esse, facilis odit fuga quasi perspiciatis aliquam ipsum repellendus. Modi minus ea doloremque tempora, quo nostrum quia ad. Laborum, dolore quibusdam.`;
            container.append(header, text);
            main.append(container);
        })

        main.addEventListener('click', e => {
            /**
             * @type {HTMLElement}
             */
            const target = e.target;
            if (target.tagName === 'H3'){
                target.classList.toggle('active');
            }
        });
    }

    items.forEach(item => accordeonHandler(item));
}

accordeon('.accordeon');
