import style from "./Search.module.css";

const Search = (props) => {

    return (
        <div className={style.search}>
            <input
                value={props.newRequestSearch}
                onChange={(event) => props.updateTextRequestSearch(event.target.value)}
                type="text"
                placeholder='search'
            />
        </div>
    )
}

export default Search;