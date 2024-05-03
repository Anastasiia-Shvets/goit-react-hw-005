
import { Link } from "react-router-dom";
import style from "./GoBackBtn.module.css";

const GoBackBtn = ({ path, children }) => {
    const lastLocation = localStorage.getItem("lastLocation");

    const handleClick = () => {
        const pathToGo = lastLocation ? lastLocation : "/";
        window.location.href = pathToGo;
    };

    return (
        <button className={style.btn} onClick={handleClick}>
            <Link to={path} className={style.link}>
                Go back
                {children}
            </Link>
        </button>
    );
};

export default GoBackBtn;
