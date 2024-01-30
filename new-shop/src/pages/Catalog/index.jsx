import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./Catalog.module.css";
import Cart from "../../components/Cart";

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const resp = await axios.get("https://fakestoreapi.com/products");
            setProducts(resp.data);
            setLoading(false);
        };
        fetchData();
    }, []);

    // if (products.length === 0) {
    //     return (
    //         <div className={style.container}>
    //             <h2>Catalog</h2>
    //             <h3>Loading...</h3>
    //         </div>
    //     );
    // }

    return (
        <div className={style.container}>
            <h2>Catalog</h2>
            {loading && <h3>Loading...</h3>}
            <div className={style.products}>
                {loading ||
                    products.map((prod) => (
                        <Cart key={prod.id} product={prod} />
                    ))}
            </div>
        </div>
    );
};

export default Catalog;
