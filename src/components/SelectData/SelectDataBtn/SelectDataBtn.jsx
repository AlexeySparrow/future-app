import style from './SelectDataBtn.module.scss';
import {NavLink} from "react-router-dom";

const SelectDataBtn = (props) => {

    let toggleSmallData = () => {
        props.setSmallServerData(!props.smallServerData)
    }
    let toggleBigData = () => {
        props.setBigServerData(!props.bigServerData)
    }

    return (
        <div className={style.selectBtn}>
            <NavLink
                to='/table'
                onClick={() => {
                    toggleSmallData()
                }}>
                SMALL
            </NavLink>
            <NavLink
                to='/table'
                onClick={() => {
                    toggleBigData()
                }}>
                BIG
            </NavLink>
        </div>
    )
}

export default SelectDataBtn;