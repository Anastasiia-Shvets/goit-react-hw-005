
import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import style from "./GoBackBtn.module.css";

const GoBackBtn = ({ children }) => {
    const location = useLocation();
    const lastLocation = useRef(location.state || '/');

    const handleClick = () => {
        const pathToGo = lastLocation.current ? lastLocation.current : "/";
        window.location.href = pathToGo;
    };

    return (
        <button className={style.btn} onClick={handleClick}>
            <Link to={lastLocation.current} className={style.link}>
                Go back {children}
            </Link>
        </button>
    );
};

export default GoBackBtn;
