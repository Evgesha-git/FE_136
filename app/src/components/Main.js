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

        
        const page = await import(`../pajes/${hash}.js`);
        console.log(page);
        let item = new page.default().init();
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