import CartWidget from "../cart-widget/CartWidget"
import styles from './NavBar.module.css'
import logo from '../../assets/logo.png'
import { NavLink } from "react-router-dom"

const NavBar = () => {
    return(
        <div className={styles.container}>
            <div className={styles.logoContainer}> 
                <img src={logo} alt="Logo Mundo Geek" />
            </div>
            
            <ul className={styles.navBarItemsContainer}>
                <NavLink to="/"><li>Home</li></NavLink>
                <NavLink to="/categories"><li>Categorías</li></NavLink>
                <NavLink to="/contact"><li>Contacto</li></NavLink>
            </ul>
            <CartWidget />
        </div>
    )
}

export default NavBar