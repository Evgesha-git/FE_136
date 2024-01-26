import React, { useContext } from "react";
import { TContext } from "../App";

const Item = ({ item }) => {
    const {onRemove, onDone} = useContext(TContext);

    return (
        <li
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                background: item.done
                    ? "rgba(0, 255, 0, .4"
                    : "rgba(255, 0 ,0, .4)",
                padding: "20px",
                marginTop: "10px",
                border: "1px solid #000",
                borderRadius: "5px",
            }}
        >
            <button onClick={() => onDone(item.id)}>Complite</button>
            <span>{item.tasck}</span>
            <button onClick={() => onRemove(item.id)}>Remove</button>
        </li>
    );
};

export default Item;
