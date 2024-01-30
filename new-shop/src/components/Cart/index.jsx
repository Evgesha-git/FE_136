import { Link } from "react-router-dom";
import style from "./Cart.module.css";

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
            <button>Add</button>
        </div>
    );
};

export default Cart;
