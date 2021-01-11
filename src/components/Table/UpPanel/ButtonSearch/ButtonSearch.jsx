import style from "./ButtonSearch.module.css";
import buttonSearch from "../../../../assets/img/search.svg";

const ButtonSearch = (props) => {

    return (
        <button className={style.button} onClick={() => {
            props.updateOnSearch(props.newRequestSearch)
        }}>
            <img src={buttonSearch} alt="search"/>
        </button>
    )
}

export default ButtonSearch;