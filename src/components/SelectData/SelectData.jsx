import style from './SelectData.module.scss';
import SelectDataBtnContainer from "./SelectDataBtn/SelectDataBtnContainer";

const SelectData = () => {
    return (
        <div className={style.selectData}>
            <h1>select dataset:</h1>
            <SelectDataBtnContainer/>
        </div>
    )
}

export default SelectData;