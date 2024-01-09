export default class Home {
    constructor(){
        this.elem = document.createElement('div');
    }

    render (){
        this.elem.classList.add('home');
        this.elem.innerHTML = '<h1>Home</h1>';
    }

    init(){
        this.render();
        return this.elem;
    }
}