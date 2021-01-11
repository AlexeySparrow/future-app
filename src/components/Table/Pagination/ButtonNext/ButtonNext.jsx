import style from "./ButtonNext.module.css";
import arrow from "../../../../assets/img/arrow.svg";

const ButtonNext = (props) => {

    return (
        <button className={style.button}
                onClick={() => props.setCurrentButton(props.currentButton === props.arrayNumbers.length
                    ? props.currentButton
                    : props.currentButton + 1)}>
            <img src={arrow} alt="next" className={style.next}/>
        </button>
    )
}

export default ButtonNext;