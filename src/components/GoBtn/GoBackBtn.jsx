
import { Link, useLocation } from "react-router-dom";
import style from "./GoBackBtn.module.css";

const GoBackBtn = ({ path}) => {
    // const lastLocation = localStorage.getItem("lastLocation");
    const location = useLocation()
    const lastLocation = location.state || '/';

    const handleClick = () => {
        const pathToGo = lastLocation ? lastLocation : "/";
        window.location.href = pathToGo;
    };

    return (
        <button className={style.btn} onClick={handleClick}>
            <Link to={path} className={style.link}>
                Go back
            </Link>
        </button>
    );
};

export default GoBackBtn;
