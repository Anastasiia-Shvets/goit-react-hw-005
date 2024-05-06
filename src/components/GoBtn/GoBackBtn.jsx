
import React from "react";
import { Link } from "react-router-dom";
import style from "./GoBackBtn.module.css";

const GoBackBtn = ({ lastLocation }) => {
    

    const handleClick = () => {
        const pathToGo = lastLocation.current ? lastLocation.current : "/";
        window.location.href = pathToGo;
    };

    return (
        <button className={style.btn} onClick={handleClick}>
            <Link to={lastLocation} className={style.link}>
                Go back
            </Link>
        </button>
    );
};

export default GoBackBtn;
