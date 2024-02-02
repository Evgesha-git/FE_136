import { useContext, useState, useEffect } from "react";
import { CardContext } from "../../App";
import { Link } from "react-router-dom";

const Widget = () => {
    const { card } = useContext(CardContext);
    const [price, setPrice] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        const pr = card
            .reduce((acc, item) => (acc += item.count * item.price), 0)
            .toFixed(2);
        const c = card.reduce((acc, item) => (acc += item.count), 0);
        setPrice(pr);
        setCount(c);
    }, [card]);

    return (
        <div className="widget">
            <Link to={"/card"}>
                {count} | {price}
            </Link>
        </div>
    );
};

export default Widget;
