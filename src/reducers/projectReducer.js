import { ADD_PROJECT, FETCH_PROJECS } from '../actions/actionTypes'
const initialState = {
  projects: []
}

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      console.log(ADD_PROJECT, action.project)
      return state

    case FETCH_PROJECS:
      console.log('Projects : ', action.data)
      return { ...state, projects: action.data }

    default:
      return state
  }
}

export default projectReducer
