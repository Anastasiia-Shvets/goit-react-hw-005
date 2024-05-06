
import React from "react";
import { Link } from "react-router-dom";
import style from "./GoBackBtn.module.css";

const GoBackBtn = ({ lastLocation }) => {


    return (
        <button className={style.btn}>
            <Link to={lastLocation} className={style.link}>
                Go back
            </Link>
        </button>
    );
};

export default GoBackBtn;
