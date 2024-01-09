export default class Footer {
    constructor(){
        this.elem = document.createElement('div');
    }

    render (){
        this.elem.classList.add('footer');
        this.elem.innerHTML = '<h3>Footer</h3>';
    }

    init(){
        this.render();
        return this.elem;
    }
}