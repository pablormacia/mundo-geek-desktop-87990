import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/categories-list-container/CategoriesListContainer'
import ProductsListContainer from './components/products-list-container/ProductsListContainer';
import Home from './components/home/Home';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<ItemListContainer /> } />
        <Route path="/products/:categoryId" element={<ProductsListContainer /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
