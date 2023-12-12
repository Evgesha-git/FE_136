const filter = selector => {
    const mainContainer = document.querySelectorAll(selector);
    if (mainContainer.length === 0 || !mainContainer) return;

    /**
     * 
     * @param {HTMLElement} item 
     */
    const filterHandler = item => {
        const buttons = item.querySelector('.filter');
        const lists = item.querySelector('.list');

        if (!buttons || !lists) return;
        

        buttons.addEventListener('click', e => {
            /**
             * @type {HTMLElement}
             */
            let target = e.target;
            let serch = target.dataset.filter;
            if (!serch) return;

            target.classList.add('active');

            [...buttons.children].forEach(item => {
                if (item !== target){
                    item.classList.remove('active');
                }
            });

            [...lists.children].forEach (item => {
                if (serch === 'all') {
                    item.style.display = '';
                } else if (item.dataset.filter !== serch ){
                    item.style.display = 'none';
                } else {
                    item.style.display = '';
                }
            })
        })
    }   

    mainContainer.forEach(item => filterHandler(item));
}

filter('.portfolio')