import { NavLink } from "react-router-dom"
import styles from './Header.module.css'
import Navigation from "../Navigation/Navigation"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <Navigation />
            </div>
        </header>
    )
}
export default Header