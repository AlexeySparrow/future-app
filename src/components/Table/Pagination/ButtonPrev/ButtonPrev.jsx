import style from "./ButtonPrev.module.scss";
import arrow from "../../../../assets/img/arrow.svg";

const ButtonPrev = (props) => {
    return (
        <button className={style.button}
                onClick={() => props.setCurrentButton(props.currentButton === 1 ? props.currentButton : props.currentButton - 1)}>
            <img src={arrow} alt="prev"/>
        </button>
    )
}

export default ButtonPrev;