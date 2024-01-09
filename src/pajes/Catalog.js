import { getData } from "../utils/getApiData.js";
import ProductCart from "../components/ProductCart.js";

export default class Catalog {
    constructor(){
        this.elem = document.createElement('div');
    }

    async render (){
        this.elem.classList.add('catalog');
        const data = await getData();
        data.forEach(item => {
            const cart = new ProductCart(item).init();
            this.elem.append(cart);
        });
    }

    init(){
        this.render();
        return this.elem;
    }
}