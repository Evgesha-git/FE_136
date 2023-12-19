/**
 * Notes - одна заметка
 * NoteController
 * NoteUI
 */
/**
 * @param {{
 * title: string,
 * content: string
 * }} data
 */
function Notes(data) { //{title: '', content: ''}
    if (data.title.length > 0 || data.content.length > 0) this.data = data;

    /**
     * @param {{
     * title?: string,
     * content?: string,
     * }} data 
     */
    this.edit = (data) => {
        this.data = {
            ...this.data,
            ...data,
        };

        /**
         * {
         * title: 'title 1',
         * content: 'content 1'
         * }
         * 
         * {
         * content: 'new content 1'
         * }
         */

        // Object.assign(this.data, data);
    }
}

// let note = new Notes({title: 'title 1', content: 'content 1'});

function NoteController () {
    this.notes = [];
    this.id = 0;

    /**
     * @param {{
     * title: string,
     * content: string,
     * }} data 
     */
    this.add = (data) => {
        let note = new Notes(data);
        note.id = this.id++;
        this.notes.push(note);
    }
}


NoteController.prototype.remove = function(id) {
    this.notes = this.notes.filter(item => item.id !== id);
}

NoteController.prototype.edit = function (id, data) {
    let note = this.notes.find(item => item.id === id);
    note.edit(data);   
}

// let notes = new NoteController();

// notes.add({title: 'title 1', content: 'content 1'});
// notes.add({title: 'title 2', content: 'content 2'});
// notes.add({title: 'title 3', content: 'content 3'});
// notes.add({title: 'title 4', content: 'content 4'});
// notes.add({title: 'title 5', content: 'content 5'});
// notes.add({title: 'title 6', content: 'content 6'});
// notes.add({title: 'title 7', content: 'content 7'});
// notes.add({title: 'title 8', content: 'content 8'});
// notes.add({title: 'title 9', content: 'content 9'});

const NoteUI = function (selector) {
    NoteController.apply(this, arguments);
    this.root = document.querySelector(selector);
    this.noteContainer = document.createElement('div');
    let self = this;
    /**
     * 
     * @param {HTMLElement} elem 
     * @param {string} eN 
     * @param {any} func 
     */
    this.on = (elem, eN, func) => {
        elem.addEventListener(eN, func);
    }

    function onAdd (event) {
        event.preventDefault();
        let data = {
            title: self.title.value || '[Пустой заголовок]',
            content: self.content.value,
        }
        self.add(data);
        self.title.value = '';
        self.content.value = '';
        console.log(self.notes);
        self.render();
    }

    this.init = () => {
        let form = document.createElement('form');
        this.title = document.createElement('input');
        this.title.setAttribute('type', 'text');
        this.content = document.createElement('textarea');
        this.addBtn = document.createElement('button');
        this.addBtn.setAttribute('type', 'submit');
        this.addBtn.innerText = 'Add note';

        this.on(form, 'submit', onAdd);

        form.append(this.title, this.content, this.addBtn);
        this.root.append(form, this.noteContainer);
    }

    this.render = () => {
        this.noteContainer.innerHTML = '';
        this.notes.forEach(note => {
            let item = document.createElement('div');
            let title = document.createElement('h2');
            let content = document.createElement('p');

            item.classList.add('note__item');
            title.classList.add('note__title');
            content.classList.add('note__content');

            title.innerText = note.data.title;
            content.innerText = note.data.content;

            item.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                this.remove(note.id);
                this.render();
            });

            item.append(title, content);
            this.noteContainer.append(item);
        });
    }
}

NoteUI.prototype = Object.create(NoteController.prototype);

new NoteUI('#root').init();

/**
 * map
 * find
 * filter
 * reduce
 * forEach
 * every
 * some
 */