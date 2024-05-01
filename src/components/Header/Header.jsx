import { NavLink } from "react-router-dom"


const Header = () => {
    return (
        <header>
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) =>
                                    isActive ? styles.isActive : styles.link}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/movies'
                                className={({ isActive }) =>
                                    isActive ? styles.isActive : styles.link}>
                                Movies
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header