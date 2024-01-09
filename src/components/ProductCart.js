export default class ProductCart{
    constructor (data) {
        this.data = data;
        this.item = document.createElement('div');
        this.item.classList.add('product__item');
    }

    render (){
        const title = document.createElement('h2');
        const desc = document.createElement('p');
        const image = document.createElement('div');
        const img = document.createElement('img');
        const price = document.createElement('p');
        const imgLink = document.createElement('a');
        const titleLink = document.createElement('a');
        title.classList.add('item__title');
        desc.classList.add('item__desc');
        image.classList.add('item__img');
        imgLink.append(img);
        image.append(imgLink);
        price.classList.add('item__price');
        titleLink.classList.add('title__link');
        titleLink.innerHTML = this.data.title;
        title.append(titleLink);
        desc.innerHTML = this.data.description;
        img.setAttribute('src', this.data.image);
        price.innerHTML = this.data.price;

        imgLink.setAttribute('href', `#ProductPage_${this.data.id}`);
        titleLink.setAttribute('href', `#ProductPage_${this.data.id}`);

        this.item.append(title, image, desc, price);
    }

    init() {
        this.render();
        return this.item;
    }
}