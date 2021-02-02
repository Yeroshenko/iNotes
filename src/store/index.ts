import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { notesReducer, serviceReducer, commentsReducer } from 'store/reducers'

const rootReducer = combineReducers({
  notes: notesReducer,
  service: serviceReducer,
  comments: commentsReducer
})

type RootReducer = typeof rootReducer
export type AppState = ReturnType<RootReducer>

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)))
