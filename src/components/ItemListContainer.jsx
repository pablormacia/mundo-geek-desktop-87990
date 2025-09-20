/* const ItemListContainer = (props) => {
    return(
        <h1>{props.message}</h1>
    )
}

export default ItemListContainer */

import { useState } from "react"

const ItemListContainer = ({ message }) => {
    console.log("Componente ItemListContainer montado")
    const [counter, setCounter] = useState(0)
    console.log("Counter:", counter)
    return (

        <div>
            <h1>{message}</h1>
            <p>Contador: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
        </div>
    )
}

export default ItemListContainer