import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
        <div>
            {loading && <h2>Loading...</h2>}
            {loading || (
                <>
                    <h2>{prod.title}</h2>
                    <div>
                        <div className="img">
                            <img src={prod.image} alt="img" />
                        </div>
                        <div className="prodInfo">
                            <p className="cat">{prod.category}</p>
                            <p className="desc">{prod.description}</p>
                            <p className="rate">{prod.rating.rate}</p>
                            <p className="price">{prod.price}</p>
                            <button>Add</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Product;
