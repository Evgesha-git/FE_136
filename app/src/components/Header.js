export default class Header {
    constructor(){
        this.elem = document.createElement('div');
    }

    render (){
        this.elem.classList.add('header');
        this.elem.innerHTML = `
            <header>
                <div class="logo">
                    <a href="#">
                        <img src="https://via.placeholder.com/50" alt="logo" />
                    </a>
                </div>
                <nav class="nav">
                    <ul>
                        <li><a href="#Home">Home</a></li>
                        <li><a href="#Catalog">Catalog</a></li>
                        <li><a href="#About">About</a></li>
                    </ul>
                </nav>
                <div class="cart">
                    <a href="#Cart">
                        <span>0</span>
                    </a>
                </div>
            </header>
        `;
    }

    init(){
        this.render();
        return this.elem;
    }
}