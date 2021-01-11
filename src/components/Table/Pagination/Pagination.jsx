import style from "./Pagination.module.css";
import NumbersContainer from "./Numbers/NumbersContainer";

const Pagination = () => {
    return (
        <div className={style.pagination}>
            <NumbersContainer/>
        </div>
    )
}

export default Pagination;