import Notes from "./notes.js";

export default class NoteController {
    constructor() {
        this.notes = [];
        this.id = 0;
    }

    add(data) {
        if (data.title.length === 0 || data.body.length === 0) return;
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

    get store() {
        let data = localStorage.getItem("notes");
        data = JSON.parse(data);
        return data;
    }

    set store(data) {
        let string = JSON.stringify(data);
        localStorage.setItem("notes", string);
    }

    get cookie() {
        let name = "notes";
        let matches = document.cookie.match(
            new RegExp(
                "(?:^|; )" +
                    name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
                    "=([^;]*)"
            )
        );
        return matches ? true : false;
    }

    set cookie(time) {
        let options = {
            path: "/",
            secure: true,
            "max-age": time,
        };

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        let updatedCookie =
            encodeURIComponent("notes") + "=" + encodeURIComponent("");

        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }

        document.cookie = updatedCookie;
    }

    get() {
        this.notes.forEach((note) => console.log(note.get()));
    }

    async getApiData (){
        let resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await resp.json();
        return data;
    }
}
