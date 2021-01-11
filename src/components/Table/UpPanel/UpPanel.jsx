import style from "./UpPanel.module.css";
import SearchContainer from "./Search/SearchContainer";
import ButtonAddUserContainer from "./ButtonAddUser/ButtonAddUserContainer";
import ButtonSearchContainer from "./ButtonSearch/ButtonSearchContainer";

const UpPanel = () => {
    return (
        <div className={style.upPanel}>
            <ButtonAddUserContainer/>
            <SearchContainer/>
            <ButtonSearchContainer/>
        </div>
    )
}

export default UpPanel;