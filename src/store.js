import { createStore } from 'redux'
import rootRedcer from './reducers'

const store = createStore(rootRedcer)

export default store
