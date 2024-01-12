import ProductCart from "../components/ProductCart.js";

class Cart {
    constructor() {
        this.elem = document.createElement("div");
        this.cart = [];
        this.widgetItem = document.createElement("a");
        this.addToCart = this.addToCart.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.getItemStatus = this.getItemStatus.bind(this);
    }

    render() {
        this.elem.innerHTML = "";
        this.elem.classList.add("cart");
        if (this.cart.length === 0) {
            this.elem.innerHTML = `
                <h2>Корзина пуста!</h2>
                <p><a href="#Catalog">За покупками!</a></p>
            `;
        } else {
            this.cart.forEach((item) => {
                let product = new ProductCart(item).init();
                this.elem.append(product);
            });
        }
    }

    addToCart(item) {
        if (!item) return;
        if (!this.cart.includes(item)) {
            this.cart.push(item);
        }
        this.widget();
        this.setStore();
    }

    removeItem(id) {
        this.cart = this.cart.filter((item) => item.id !== id);
        this.render();
        this.widget();
        this.setStore();
    }

    getItemStatus(id) {
        return this.cart.some((item) => item.id === id);
    }

    widget() {
        let counter = this.cart.length;
        let totalPrice = this.cart
            .reduce((count, item) => count + item.price, 0)
            .toFixed(2);
        this.widgetItem.setAttribute("href", "#Cart");
        this.widgetItem.innerHTML = `
            <span>${counter}</span> | <span>${totalPrice}</span
        `;

        return this.widgetItem;
    }

    setStore () {
        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    getStore () {
        let cart = localStorage.getItem('cart');
        this.cart = JSON.parse(cart) ?? []; // ||
        this.widget();
        this.render();
    }

    init() {
        this.render();
        return this.elem;
    }
}

const cart = new Cart();
const widget = cart.widget();
const addToCart = cart.addToCart;
const removeItem = cart.removeItem;
const getItemStatus = cart.getItemStatus;

export default cart;
export { widget, addToCart, removeItem, getItemStatus };

cart.getStore();