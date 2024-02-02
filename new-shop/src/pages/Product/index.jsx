import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AddButtons from "../../components/AddButtons";
import style from "./Product.module.css";

const Product = () => {
    const [loading, setLoading] = useState(true);
    const [prod, setProd] = useState({});
    const { prodId } = useParams();

    useEffect(() => {
        (async () => {
            const resp = await axios.get(
                `https://fakestoreapi.com/products/${prodId}`
            );
            setProd(resp.data);
            setLoading(false);
        })();
    }, []);

    return (
        <div className={style.container}>
            {loading && <h2>Loading...</h2>}
            {loading || (
                <>
                    <h2>{prod.title}</h2>
                    <div className={style.content}>
                        <div className={style.img}>
                            <img src={prod.image} alt="img" />
                        </div>
                        <div className={style.prodInfo}>
                            <p className={style.cat}>{prod.category}</p>
                            <p className={style.desc}>{prod.description}</p>
                            <p className={style.rate}>{prod.rating.rate}</p>
                            <p className={style.price}>{prod.price}</p>
                            <AddButtons product={prod} />
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Product;
