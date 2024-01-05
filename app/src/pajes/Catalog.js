export default class Catalog {
    constructor(){
        this.elem = document.createElement('div');
    }

    render (){
        this.elem.classList.add('catalog');
        this.elem.innerHTML = '<h1>Catalog</h1>';
    }

    init(){
        this.render();
        return this.elem;
    }
}