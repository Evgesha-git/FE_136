import { widget } from "../pajes/Cart.js";

export default class Header {
    constructor() {
        this.elem = document.createElement("div");
    }

    render() {
        this.elem.classList.add("header");
        let cart = document.createElement('div');
        cart.classList.add('cart');
        cart.append(widget);
        this.elem.innerHTML = `
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
        `;

        this.elem.append(cart);
    }

    init() {
        this.render();
        return this.elem;
    }
}
