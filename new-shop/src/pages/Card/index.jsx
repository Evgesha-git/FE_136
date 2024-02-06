import React, { useState, useContext, useEffect } from "react";
import { CardContext } from "../../App";
import AddButtons from "../../components/AddButtons";
import style from "./Card.module.css";
import classNames from "classnames";

const Card = ({ className }) => {
    const { card, setCard } = useContext(CardContext);
    const [empty, setEmpty] = useState(true);
    const [allPrice, setAllPrice] = useState(0);

    const mainStyle = classNames(style.card, className);

    const deleteItem = (id) => {
        setCard(card.filter((item) => item.id !== id));
    };

    useEffect(() => {
        if (card.length > 0) {
            setEmpty(false);
            console.log(
                card
                    .reduce((acc, item) => (acc += item.price * item.count), 0)
                    .toFixed(2)
            );
            setAllPrice(
                card
                    .reduce((acc, item) => (acc += item.price * item.count), 0)
                    .toFixed(2)
            );
        } else {
            setEmpty(true);
            setAllPrice(0);
        }
    }, [card]);

    return (
        <div className={mainStyle}>
            <div className={style.container}>
                <h2>Корзина товаров</h2>
                {empty && <h3>Корзина пуста</h3>}
                {!empty && (
                    <div className={style.cardItems}>
                        {card.map((item) => {
                            return (
                                <div className={style.item} key={item.id}>
                                    <div className={style.img}>
                                        <img src={item.image} alt="img" />
                                    </div>
                                    <div className={style.info}>
                                        <h3>{item.title}</h3>
                                        <p>{item.price}</p>
                                        <AddButtons
                                            product={item}
                                            className={style.buttons}
                                        />
                                    </div>
                                    <div
                                        className={style.del}
                                        onClick={() => deleteItem(item.id)}
                                    >
                                        X
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
                {!empty && <p>Стоимость корзины: {allPrice}</p>}
                {!empty && (
                    <button onClick={() => setCard([])}>
                        Отчистить корзину
                    </button>
                )}
            </div>
        </div>
    );
};

export default Card;
