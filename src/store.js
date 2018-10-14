import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootRedcer from './reducers'

const store = createStore(rootRedcer, applyMiddleware(thunk))

export default store
