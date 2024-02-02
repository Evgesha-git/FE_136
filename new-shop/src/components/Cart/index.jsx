import { Link } from "react-router-dom";
import style from "./Cart.module.css";
import AddButtons from "../AddButtons";

const Cart = ({ product }) => {
    return (
        <div className={style.product}>
            <h3>{product.title}</h3>
            <div className={style.img}>
                <Link to={`/products/${product.id}`}>
                    <img src={product.image} alt="img" />
                </Link>
            </div>
            <p className={style.price}>{product.price}</p>
            <AddButtons product={product} />
        </div>
    );
};

export default Cart;
