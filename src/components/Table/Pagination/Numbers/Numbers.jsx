import style from "./Numbers.module.css";
import ButtonNextContainer from "../ButtonNext/ButtonNextContainer";
import ButtonPrevContainer from "../ButtonPrev/ButtonPrevContainer";
import React from 'react';

const Numbers = (props) => {

    let filter = props.filteredData();

    let amountPage = Math.ceil(filter.length / props.maxUsersOnPage);

    let arrayNumbers = [];
    for (let i = 1; i <= amountPage; i++) {
        arrayNumbers.push(i)
    }

    let boxNumbers = [...arrayNumbers];

    if (arrayNumbers.length > 6) {
        if (props.currentButton >= 1 && props.currentButton <= 3) {
            boxNumbers = [1, 2, 3, 4, props.dotsRight, arrayNumbers.length];
        } else if (props.currentButton === 4) {
            const sliced = arrayNumbers.slice(0, 5);
            boxNumbers = [...sliced, props.dotsRight, arrayNumbers.length];
        } else if (props.currentButton > 4 && props.currentButton < arrayNumbers.length - 2) {
            const sliced1 = arrayNumbers.slice(props.currentButton - 2, props.currentButton);
            const sliced2 = arrayNumbers.slice(props.currentButton, props.currentButton + 1);
            boxNumbers = [1, props.dotsLeft, ...sliced1, ...sliced2, props.dotsRight, arrayNumbers.length];
        } else if (props.currentButton > arrayNumbers.length - 3) {
            const sliced = arrayNumbers.slice(arrayNumbers.length - 4);
            boxNumbers = [1, props.dotsLeft, ...sliced];
        } else if (props.currentButton === props.dotsRight || props.currentButton === props.dotsLeft) {
            Math.ceil(props.setCurrentButton(arrayNumbers.length / 2))
        }
    }

    /* page && style.numberAction*/
    return (
        <>
            <ButtonPrevContainer/>
            <div className={style.numbers}>
                {
                    boxNumbers.map((page, index) =>
                        <span className={page === props.currentButton ? style.numberAction : undefined}
                              key={index}
                              onClick={() => {
                                  props.setCurrentButton(page)
                              }}
                        >{page}</span>
                    )
                }
            </div>
            <ButtonNextContainer arrayNumbers={arrayNumbers}/>
        </>
    )
}

export default Numbers;