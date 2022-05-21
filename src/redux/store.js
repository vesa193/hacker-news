import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime';
import rootSaga from '../sagas/rootSaga';
import { rootReducer } from './reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
