export default class Notes {
    constructor(data) {
        //{title: '', content: ''}
        if (data.title.length > 0 || data.body.length > 0) this.data = data;
    }

    edit(data) {
        Object.assign(this.data, data);
    }

    get() {
        return `${this.data.title} \n ${this.data.body}`;
    }
}