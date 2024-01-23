import React, { useState } from "react";
import ReactDOM from "react-dom/client";

/**
 * 1 - Создание элементов
 * 2 - Отображение на странице
 */

// const h2 = document.createElement('h2');
// h2.innerText = 'Header';
// const p = document.createElement('p');
// p.innerText = `Lorem ipsum dolor sit amet consectetur.`;

// const main = document.createElement('div');
// main.classList.add('main-vanila');
// main.setAttribute('data-id', 'jhfgjsdfgsdj');
// main.innerText = 'Main content';

// main.append(h2, p);
// document.getElementById('root').append(main);

//-------------------------------------------

// const h2R = React.createElement("h2", null, "Header react");
// const pR = React.createElement(
//     "p",
//     {
//         className: "p1 p2 p3",
//         title: "test",
//     },
//     `Lorem ipsum dolor sit amet consectetur.`
// );

// const mainR = React.createElement(
//     "div",
//     {
//         className: "class1 class2 class3",
//         "data-id": "b3425",
//     },
//     [
//         "Main react content",
//         h2R,
//         pR,
//         React.createElement("img", {
//             src: "https://via.placeholder.com/200",
//             alt: "img",
//         }),
//     ]
// );

// const root = ReactDOM.createRoot(document.getElementById('root2'));

// root.render(mainR);

/**
 * 3 - Создание компонентов
 */

// function Logo() {
//     this.create = () => {
//         this.elem = document.createElement("div");
//         this.elem.classList.add("logo");
//         this.elem.innerHTML = `
//             <a href="#">
//             <img src="https://via.placeholder.com/200/fec2a4" alt="logo" />
//             </a>
//         `;
//         return this.elem;
//     };
// }

// const logo = new Logo().create();
// document.getElementById("root").append(logo);

// function ReactLogo() {
//     return React.createElement(
//         "div",
//         {
//             className: "react-logo, class2",
//         },
//         React.createElement(
//             "a",
//             null,
//             React.createElement("img", {
//                 src: "https://via.placeholder.com/200/fe4400",
//                 alt: "logo react",
//             })
//         )
//     );
// }

// const root = ReactDOM.createRoot(document.getElementById("root2"));

// root.render(React.createElement("div", null, [ReactLogo(), mainR]));

/**
 * JSX - React
 */

// const root = ReactDOM.createRoot(document.getElementById("root2"));

// root.render(
//     <div className="main">
//         <h2 id="title">Lorem, ipsum dolor.</h2>
//         <p className="main_text">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
//             soluta?
//         </p>
//         <div className="logo">
//             <a href="">
//                 <img src="https://via.placeholder.com/200/faaa00" alt="logo" />
//             </a>
//         </div>
//     </div>
// );

/**
 * 4 - пропсы
 * 5 - стейт
 * 6 - события
 */

const Header = (props) => {
    return (
        <header className="header">
            header content {props.a + props.b}, {props.str}
            <div className="content">{props.children}</div>
        </header>
    );
};

const Button = () => {
    const [count, setCount] = useState(0);

    const buttonHandler = () => {
        let value = count;
        setCount(value + 1);
    };

    return <button onClick={buttonHandler}>{count}</button>;
};

const Input = () => {
    const [text, setText] = useState("");
    return (
        <div>
            <input 
                type="text" 
                onInput={(e) => setText(e.target.value)}
                value={text}
            />
            <span>{text}</span>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.Fragment>
        <Header a={3} b={7} str="lorem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            aliquid culpa. Iusto voluptatum suscipit deserunt quaerat tenetur
            esse. Autem tempora perspiciatis culpa ut dolor aliquam sunt
            suscipit voluptate cumque earum?
        </Header>
        <Button />
        <Input/>
    </React.Fragment>
);
