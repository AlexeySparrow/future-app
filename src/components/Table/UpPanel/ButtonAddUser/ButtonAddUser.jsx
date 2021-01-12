import style from './ButtonAddUser.module.scss';
import buttonAdd from '../../../../assets/img/plus.svg'

const ButtonAddUser = (props) => {

    let togglePanel = () => {
        props.setOpenPanelAddUser(!props.openPanelAddUser)
    }

    return (
        <button className={style.button} onClick={() => {
            togglePanel()
        }}>
            <img src={buttonAdd} alt="search"/>
        </button>
    )
}

export default ButtonAddUser;