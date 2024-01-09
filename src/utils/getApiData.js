async function getData() {
    const resp = await fetch("https://fakestoreapi.com/products");
    if (resp.ok) {
        return await resp.json();
    }
}

async function getItem (id) {
    const resp = await fetch(`https://fakestoreapi.com/products/${id}`);
    if (resp.ok) {
        return await resp.json();
    }
}

export { getData, getItem };
