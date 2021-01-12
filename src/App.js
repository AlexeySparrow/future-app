import style from './app.module.scss';
import Table from "./components/Table/Table";
import SelectData from "./components/SelectData/SelectData";
import {Route} from 'react-router-dom';

const App = () => {
    return (
        <div className={style.wrapper}>
            <Route exact path='/' render={() => <SelectData/>}/>
            <Route path='/table' render={() => <Table/>}/>
        </div>
    );
}

export default App;
