import style from "./ButtonNext.module.scss";
import arrow from "../../../../assets/img/arrow.svg";

const ButtonNext = (props) => {

    return (
        <button className={style.button}
                onClick={() => props.setCurrentButton(props.currentButton === props.arrayNumbers.length
                    ? props.currentButton
                    : props.currentButton + 1)}>
            <img src={arrow} alt="next"/>
        </button>
    )
}

export default ButtonNext;