import { useState, useEffect } from "react"
import Card from './Card'

const ItemListContainer = () => {
    console.log("Componente ItemListContainer montado")
    const [categories, setCategories] = useState([])
    const [nuevosDatos, setNuevosDatos] = useState(false)

    console.log("Nuevos datos:", nuevosDatos)

    const fetchCategories = () => {
        const categoriesFromDB = [
            {
                id: 1,
                name: "Consolas"
            },
            {
                id: 2,
                name: "Gadgets"
            },
            {
                id: 3,
                name: "comics"
            }
        ] //Esto es un mock

        console.log("Trayendo las categorías de algún lugar lejano...")
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(categoriesFromDB)
            }, 2000)
        })
    }

    /*  fetchCategories()
     .then()
     .catch()
     .finally() */

    /* fetchCategories() // Esto se ejecuta indefinidamente, cuidado
        .then(response => setCategories(response)) */


    useEffect(() => {
        fetchCategories()
            .then(response => setCategories(response))
    }, [nuevosDatos])


    return (
        <div>
            {categories?.map((category, index) => <Card key={index}>{category.name}</Card>)}
            <button onClick={()=>setNuevosDatos(!nuevosDatos)}>Cargar nuevos datos (de mentira)</button>
        </div>
    )
}

export default ItemListContainer