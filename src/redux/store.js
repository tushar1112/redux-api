import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers/index';
import createSagaMiddleware from '@redux-saga/core';
import { watcherSaga } from './saga/rootSaga';

const sagaMiddleWare= createSagaMiddleware();
const store = createStore(reducers,{},applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(watcherSaga);

export default store;