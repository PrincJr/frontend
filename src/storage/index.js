import { createStore, applyMiddleware } from "redux"
import  createSagaMiddleware from "redux-saga"

import RootReducer from "./rootReducer"
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddleware()

const middlewares = [
    sagaMiddleware
]

const store = createStore(RootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

export default store