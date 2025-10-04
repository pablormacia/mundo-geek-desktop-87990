import { useState, useEffect } from 'react'
import local_products from "../data/products.json"

export function useGetProduct(productId) {
    //Voy a simular la llamada a un servidor utilizando setTimeout
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const getProduct = () => {
            const productFinded = local_products.find(product=>product.id===Number(productId))

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(productFinded);
                }, 1000);
            });
        };

        setLoading(true)

        getProduct()
            .then((response) => setProduct(response))
            .catch(() => console.log("Error al obtener el producto"))
            .finally(() => setLoading(false))
    }, [productId])


    return {product,loading}
}