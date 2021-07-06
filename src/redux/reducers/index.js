import {combineReducers} from 'redux';
import { dataReducer , setUserReducer} from './DataReducer';

const reducers = combineReducers({
    allDATA:dataReducer,
    user:setUserReducer
});

export default reducers;