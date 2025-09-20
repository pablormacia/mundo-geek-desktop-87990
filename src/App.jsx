import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Card from './components/Card'
import {useState} from "react"

function App() {
  /* let counter = 0 */
  console.log("Componente App montado")
  return (
    <>
      {/* <Card>
        <div>
          <h1>Título de esta card</h1>
          <p>Card desde App.jsx(padre)</p>
        </div>
      </Card> */}
      <NavBar />
      <ItemListContainer message="Hola coder!" /> 
      
    </>
  )
}

export default App
