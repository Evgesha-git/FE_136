/**
 * Notes - одна заметка
 * NoteController
 * NoteUI
 */

class Notes {
    constructor(data) {
        //{title: '', content: ''}
        if (data.title.length > 0 || data.content.length > 0) this.data = data;
    }

    edit(data) {
        Object.assign(this.data, data);
    }
}

// let note = new Notes({title: 'title 1', content: 'content 1'});

class NoteController {
    constructor() {
        this.notes = [];
        this.id = 0;
    }

    add(data) {
        if (data.title.length === 0 || data.content.length === 0) return;
        let note = new Notes(data);
        note.edit({ id: this.id++ });
        this.notes.push(note);
    }

    remove(id) {
        this.notes = this.notes.filter((note) => note.data.id !== id);
    }

    edit(id, data) {
        let note = this.notes.find((note) => note.data.id === id);
        note.edit(data);
    }
}

const notes = new NoteController();

// notes.add({title: 'title 1', content: 'content 1'});
// notes.add({title: 'title 2', content: 'content 2'});
// notes.add({title: 'title 3', content: 'content 3'});
// notes.add({title: 'title 4', content: 'content 4'});

class NoteUI extends NoteController {
    constructor(selector) {
        super();
        this.root = document.querySelector(selector);
        this.noteContainer = document.createElement("div");
        this.init();
    }

    init() {
        let form = document.createElement("form");
        let title = document.createElement("input");
        title.setAttribute("type", "text");
        let content = document.createElement("textarea");
        let send = document.createElement("button");
        send.setAttribute("type", "submit");
        send.innerText = "Add note";

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const data = {
                title: title.value,
                content: content.value,
            };

            // NoteController.prototype.add(data);
            // super.add(data);
            this.add(data);
            title.value = "";
            content.value = "";
            this.render();
        });

        form.append(title, content, send);
        this.root.append(form, this.noteContainer);
    }

    render() {
        this.noteContainer.innerHTML = "";
        this.notes.forEach((note) => {
            let flag = false;
            const item = document.createElement("div");
            item.classList.add("note__item");
            const title = document.createElement("h2");
            title.classList.add("note__title");
            title.innerText = note.data.title;
            const content = document.createElement("p");
            content.classList.add("note__content");
            content.innerText = note.data.content;
            const edit = document.createElement("button");
            edit.classList.add("note__edit");
            edit.innerText = "Edit";

            const remove = document.createElement("button");
            remove.classList.add("note__remove");
            remove.innerText = "Remove";

            remove.addEventListener("click", () => {
                this.remove(note.data.id);
                this.render();
            });

            edit.addEventListener("click", () => {
                if (flag) {
                    title.contentEditable = false;
                    content.contentEditable = false;
                    edit.innerText = "Edit";
                    flag = !flag;
                    let data = {
                        title: title.innerText,
                        content: content.innerText,
                    };
                    this.edit(note.data.id, data);
                } else {
                    title.contentEditable = true;
                    content.contentEditable = true;
                    edit.innerText = "Save";
                    flag = !flag;
                }
            });

            item.append(title, content, edit, remove);
            this.noteContainer.append(item);
        });
    }
}

new NoteUI("#root");
