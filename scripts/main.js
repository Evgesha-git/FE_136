/**
 * Notes - одна заметка
 * NoteController
 * NoteUI
 */
import NoteController from "./notecontroller.js";

export default class NoteUI extends NoteController {
    constructor(selector) {
        super();
        this.root = document.querySelector(selector);
        this.noteContainer = document.createElement("div");
        this.preloader = document.createElement('div');
        this.preloader.classList.add('preloader');
        this.preloader.innerHTML = `
            <div class="preloader__row">
                <div class="preloader__item"></div>
                <div class="preloader__item"></div>
            </div>
        `
        this.init();
    }

    async init() {
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
                body: content.value,
            };

            // NoteController.prototype.add(data);
            // super.add(data);
            this.add(data);
            title.value = "";
            content.value = "";
            this.store = this.notes;
            this.cookie = 10 * 24 * 60 * 60;
            this.render();
            this.get();
        });

        form.append(title, content, send);
        this.root.append(form, this.noteContainer);

        if (!this.store){
            this.root.append(this.preloader);
            let data = await this.getApiData();
            this.preloader.remove();
            data.forEach(note => this.add(note));
            this.store = this.notes;
            this.render();
        }

        if (!this.cookie) {
            localStorage.removeItem("notes");
        }

        if (this.store) {
            this.store.forEach((note) => this.add(note.data));
            this.render();
        }
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
            content.innerText = note.data.body;
            const edit = document.createElement("button");
            edit.classList.add("note__edit");
            edit.innerText = "Edit";

            const remove = document.createElement("button");
            remove.classList.add("note__remove");
            remove.innerText = "Remove";

            remove.addEventListener("click", () => {
                this.remove(note.data.id);
                this.store = this.notes;
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
                        body: content.innerText,
                    };
                    this.edit(note.data.id, data);
                    this.cookie = 10 * 24 * 60 * 60;
                    this.store = this.notes;
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


