import { useState, useEffect } from 'react'
import local_products from "../data/products.json"

export function useGetProducts(categoryId) {
    //Voy a simular la llamada a un servidor utilizando setTimeout
    const [productsFilteredByCategory, setProductsFilteredByCategory] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const getProductsByCategory = () => {
            const filtered = local_products.filter(product=>product.categoryId===Number(categoryId))

            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(filtered);
                }, 2000);
            });
        };

        setLoading(true)

        getProductsByCategory()
            .then((response) => setProductsFilteredByCategory(response))
            .catch(() => console.log("Error al obtener las categorías"))
            .finally(() => setLoading(false))
    }, [categoryId])


    return {productsFilteredByCategory,loading}
}