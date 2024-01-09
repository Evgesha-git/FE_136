export default class Main {
    constructor (){
        this.elem = document.createElement('main');
        this.routeHandler = this.routeHandler.bind(this);
    }

    async routeHandler(){
        this.elem.innerHTML = '';
        let hash = window.location.hash.slice(1);
        if (!hash) hash = 'Home';
        // console.log(hash);
        /**
         * @type {null | number}
         */
        let id = null;
        let item = null;

        if (hash.indexOf('_') !== -1){
            let index = hash.indexOf('_');
            id = +hash.substring(index).slice(1);
            hash = hash.slice(0, index);
        }
        
        const page = await import(`../pajes/${hash}.js`);
        // console.log(page);
        if (!id){
            item = new page.default().init();
        } else {
            item = new page.default(id).init();
        }
        
        this.elem.append(item);
    }

    router (){
        window.addEventListener('hashchange', this.routeHandler);
        window.addEventListener('DOMContentLoaded', this.routeHandler);
    }

    init(){
        this.router();
        return this.elem;
    }
}