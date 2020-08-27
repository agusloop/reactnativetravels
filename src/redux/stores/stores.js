import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../reducers/reducers";
import sagas from "../sagas/sagas";

export default () => {

    //Nueva instancia de Redux Saga
    const sagaMiddleware = createSagaMiddleware();

    return {
        ...createStore(reducers, applyMiddleware(sagaMiddleware)),
        runSaga: sagaMiddleware.run(sagas)
    }

};