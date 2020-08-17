import { createStore, compose } from 'redux'

import IndexReducer from "./IndexReducer"

const composeSetup =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose

const store = createStore(
    IndexReducer,
    composeSetup()
)

export { store }
