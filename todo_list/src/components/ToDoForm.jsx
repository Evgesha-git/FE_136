import React, { useState } from "react";

const ToDoForm = ({ tasck, setTasck }) => {
    const [text, steText] = useState("");

    const getId = () => {
        const id = Math.floor(Math.random() * 10000);
        if (tasck.length === 0) return id;
        if (tasck.some((item) => item.id === id)) {
            return getId();
        } else {
            return id;
        }
    };

    const formHandler = (e) => {
        e.preventDefault();
        const t = {
            id: getId(),
            done: false,
            tasck: text,
        };

        setTasck([...tasck, t]);
        steText('');
    };

    return (
        <div className="todoform">
            <form onSubmit={formHandler}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => steText(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default ToDoForm;
