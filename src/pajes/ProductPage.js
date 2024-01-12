import { getItem } from "../utils/getApiData.js";
import { addToCart, removeItem, getItemStatus } from "./Cart.js";

export default class ProductPage{
    constructor(id){
        this.id = id;
        this.elem = document.createElement('div');
        this.elem.classList.add('product');
    }

    async render(){
        const data = await getItem(this.id);
        const container = document.createElement('div');
        const image = document.createElement('div');
        const content = document.createElement('div');
        const rate = document.createElement('span');
        const category = document.createElement('span');
        const title = document.createElement('h2');
        const desc = document.createElement('p');
        const price = document.createElement('p');
        const button = document.createElement('button');
        const img = document.createElement('img');

        container.classList.add('product__container');
        image.classList.add('product__image');
        content.classList.add('product__content');
        rate.classList.add('product__rate');
        category.classList.add('product__category');
        title.classList.add('product__title');
        desc.classList.add('product__desc');
        price.classList.add('product__price');
        button.classList.add('product__button');

        title.innerHTML = data.title;
        rate.innerHTML = data.rating.rate;
        category.innerHTML = data.category;
        desc.innerHTML = data.description;
        price.innerHTML = data.price;
        button.innerText = getItemStatus(data.id) ? 'Remove' : 'Add to card';

        button.addEventListener('click', () => {
            if (getItemStatus(data.id)){
                removeItem(data.id);
                button.innerText = 'Add to cart';
            } else {
                addToCart(data);
                button.innerText = 'Remove';
            }
        });

        img.setAttribute('src', data.image);

        image.append(img);
        content.append(rate, category, title, desc, price, button);
        container.append(image, content);
        this.elem.append(container);
    }

    init() {
        this.render();
        return this.elem;
    }
}