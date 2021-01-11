import style from './SelectData.module.css';
import SelectDataBtnContainer from "./SelectDataBtn/SelectDataBtnContainer";

const SelectData = () => {
    return (
        <div className={style.container}>
            <h1 className={style.title}>select dataset:</h1>
            <SelectDataBtnContainer/>
        </div>
    )
}

export default SelectData;