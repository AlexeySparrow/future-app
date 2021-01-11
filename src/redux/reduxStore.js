import {combineReducers, createStore} from "redux";
import tableReducer from "./tableReducer";

let reducers = combineReducers({
    tablePage: tableReducer
});

let store = createStore(reducers);

export default store;