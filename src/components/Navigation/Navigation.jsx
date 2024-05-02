import { NavLink } from 'react-router-dom'
import style from './Navigation.module.css'

const Navigation = () => {
    return (
        <nav className={style.nav}>
            <ul className={style.lists}>
                <li>
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? style.isActive : style.link}>HOME</NavLink>
                </li>
                <li>
                    <NavLink to="/movies" className={({ isActive }) =>
                        isActive ? style.isActive : style.link}>MOVIES</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;