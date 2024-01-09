export default class About {
    constructor(){
        this.elem = document.createElement('div');
    }

    render (){
        this.elem.classList.add('about');
        this.elem.innerHTML = '<h1>About</h1>';
    }

    init(){
        this.render();
        return this.elem;
    }
}