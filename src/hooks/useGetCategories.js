import { useState, useEffect } from 'react'
import local_categories from '../data/categories.json'

export function useGetCategories() {
    //Voy a simular la llamada a un servidor utilizando setTimeout
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        const getCategories = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(local_categories);
                }, 2000);
            });
        };

        getCategories()
            .then((response) => setCategories(response))
            .catch(() => console.log("Error al obtener las categorías"))
            .finally(() => setLoading(false))
    }, [])


    return {categories,loading}
}