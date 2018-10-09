import { combineReducers } from 'redux'

import AuthReducer from './authReducer'
import ProjectReducer from './projectReducer'

const rootReducer = combineReducers({
  auth: AuthReducer,
  project: ProjectReducer
})

export default rootReducer
