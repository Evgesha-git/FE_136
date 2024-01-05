import NoteUI from "./main.js";

// import NoteUI from "./test.js";
// import { p, f1 as f2 } from "./test.js";
import * as test from './test.js';

new NoteUI("#root");

// console.log(NoteUI);
// console.log(note);

console.log(test);

document.querySelector('.added')
    .addEventListener('click', async () => {
        const module = await import('./test2.js');
        document.body.append(module.default);
    });
