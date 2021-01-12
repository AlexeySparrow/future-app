import style from "./TitleTable.module.scss";
import ArrowContainer from "./Arrow/ArrowContainer";

const TitleTable = (props) => {

    return (
        <thead>
        <tr className={style.titleTable}>
            {
                props.titleTable.map((title, index) =>
                    <th onClick={() => {
                        props.fieldSortArrow(title.type)
                    }} key={index}>
                        {props.fieldArrow === title.type ? <ArrowContainer/> : null}
                        {title.name}
                    </th>
                )
            }
        </tr>
        </thead>
    )
}

export default TitleTable;