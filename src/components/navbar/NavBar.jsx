import CartWidget from "../cart-widget/CartWidget"
import styles from './NavBar.module.css'
import logo from '../../assets/logo.png'

const NavBar = () => {
    console.log("Componente Navbar montado")
    return(
        <div className={styles.container}>
            <div className={styles.logoContainer}> 
                <img src={logo} alt="Logo Mundo Geek" />
            </div>
            
            <ul className={styles.navBarItemsContainer}>
                <li>Home</li>
                <li>Categorías</li>
                <li>Contacto</li>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar