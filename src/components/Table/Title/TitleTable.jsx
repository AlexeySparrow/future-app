import style from "./TitleTable.module.css";
import ArrowContainer from "./Arrow/ArrowContainer";

const TitleTable = (props) => {

    return (
        <thead>
        <tr className={style.titleTable}>
            <th onClick={() => {
                props.fieldSortArrow('id')
            }}>
                {props.fieldArrow === 'id' ? <ArrowContainer/> : null}
                Id
            </th>
            <th onClick={() => {
                props.fieldSortArrow('firstName')
            }}>
                {props.fieldArrow === 'firstName' ? <ArrowContainer/> : null}
                First Name
            </th>
            <th onClick={() => {
                props.fieldSortArrow('lastName')
            }}>
                {props.fieldArrow === 'lastName' ? <ArrowContainer/> : null}
                Last Name
            </th>
            <th onClick={() => {
                props.fieldSortArrow('email')
            }}>
                {props.fieldArrow === 'email' ? <ArrowContainer/> : null}
                Email
            </th>
            <th onClick={() => {
                props.fieldSortArrow('phone')
            }}>
                {props.fieldArrow === 'phone' ? <ArrowContainer/> : null}
                Phone
            </th>
        </tr>
        </thead>
    )
}

export default TitleTable;