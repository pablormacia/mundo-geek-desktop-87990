import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar'
import CategoriesListContainer from './components/categories-list-container/CategoriesListContainer'
import ProductsListContainer from './components/products-list-container/ProductsListContainer';
import ProductDetailContainer from './components/product-detail-container/ProductDetailContainer';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategoriesListContainer /> } />
        <Route path="/products/:categoryId" element={<ProductsListContainer /> } />
        <Route path="/product/:productId" element={<ProductDetailContainer /> } />
        <Route path="/contact" element={<Contact /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
