
import { Link } from "react-router-dom"
import style from "./GoBackBtn.module.css"

const GoBackBtn = ({ path, children }) => {
    
    
    return (
        <>
            <Link to={path} className={style.link}>{children}</Link>
            <button className={style.btn}>Go back</button>
        </>
    )
}
export default GoBackBtn