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
      {/* <NavBar /> */}
      <ItemListContainer />      
    </>
  )
}

export default App
