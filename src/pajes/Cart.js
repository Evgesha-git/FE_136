export default class Cart {
    constructor(){
        this.elem = document.createElement('div');
    }

    render (){
        this.elem.classList.add('cart');
        this.elem.innerHTML = '<h1>Cart</h1>';
    }

    init(){
        this.render();
        return this.elem;
    }
}