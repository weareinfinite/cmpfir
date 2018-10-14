import { combineReducers } from 'redux'

import AuthReducer from './authReducer'
import ProjectReducer from './projectReducer'
import { reducer as toastrReducer } from 'react-redux-toastr'

const rootReducer = combineReducers({
  auth: AuthReducer,
  project: ProjectReducer,
  toastr: toastrReducer
})

export default rootReducer
